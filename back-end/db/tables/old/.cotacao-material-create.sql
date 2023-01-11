SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cotacao_material](
	[id_cotacao_material] [int] IDENTITY(1,1) NOT NULL,
	[id_cotacao] [int] NOT NULL,
	[id_codigo_material] [int] NOT NULL,
	[peso_desejado] [int] NOT NULL,
	[prazo_de_entrega_desejado] [datetime] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao_material] ADD  CONSTRAINT [PK_cotacao_material] PRIMARY KEY CLUSTERED 
(
	[id_cotacao_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_cotacao_material_1] ON [dbo].[cotacao_material]
(
	[id_cotacao] ASC,
	[id_codigo_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cotacao_material]  WITH CHECK ADD  CONSTRAINT [FK_cotacao_material_codigo_material] FOREIGN KEY([id_codigo_material])
REFERENCES [dbo].[codigo_material] ([id_codigo_material])
GO
ALTER TABLE [dbo].[cotacao_material] CHECK CONSTRAINT [FK_cotacao_material_codigo_material]
GO
ALTER TABLE [dbo].[cotacao_material]  WITH CHECK ADD  CONSTRAINT [FK_cotacao_material_cotacao] FOREIGN KEY([id_cotacao])
REFERENCES [dbo].[cotacao] ([id_cotacao])
GO
ALTER TABLE [dbo].[cotacao_material] CHECK CONSTRAINT [FK_cotacao_material_cotacao]
GO
