SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cotacao](
	[id_cotacao] [int] IDENTITY(1,1) NOT NULL,
	[id_assinante] [int] NOT NULL,
	[id_usuario] [int] NOT NULL,
	[material] [varchar](200) NOT NULL,
	[codigo_produto] [varchar](200) NULL,
	[produto] [varchar](200) NOT NULL,
	[forma] [varchar](100) NOT NULL,
	[espessura] [varchar](10) NOT NULL,
	[largura] [varchar](10) NOT NULL,
	[comprimento] [varchar](20) NULL,
	[norma] [varchar](100) NOT NULL,
	[revestimento] [varchar](100) NOT NULL,
	[peso_desejado] [varchar](10) NOT NULL,
	[prazo_entrega_desejado] [datetime] NOT NULL,
	[observacoes] [varchar](1000) NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao] ADD  CONSTRAINT [PK_cotacao] PRIMARY KEY CLUSTERED 
(
	[id_cotacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao]  WITH CHECK ADD  CONSTRAINT [FK_cotacao_assinante] FOREIGN KEY([id_assinante])
REFERENCES [dbo].[assinante] ([id_assinante])
GO
ALTER TABLE [dbo].[cotacao] CHECK CONSTRAINT [FK_cotacao_assinante]
GO
ALTER TABLE [dbo].[cotacao]  WITH CHECK ADD  CONSTRAINT [FK_cotacao_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[cotacao] CHECK CONSTRAINT [FK_cotacao_usuario]
GO
