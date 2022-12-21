SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cotacao](
	[id_cotacao] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[observacao] [varchar](1000) NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [datetime] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao] ADD  CONSTRAINT [PK_cotacao] PRIMARY KEY CLUSTERED 
(
	[id_cotacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao]  WITH CHECK ADD  CONSTRAINT [FK_cotacao_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[cotacao] CHECK CONSTRAINT [FK_cotacao_usuario]
GO
