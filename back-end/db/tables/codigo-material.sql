SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[codigo_material](
	[id_codigo_material] [int] IDENTITY(1,1) NOT NULL,
	[id_comprador] [int] NOT NULL,
	[id_material] [int] NOT NULL,
	[codigo_material] [varchar](50) NOT NULL,
	[id_tipo] [int] NOT NULL,
	[id_forma] [int] NOT NULL,
	[id_comprimento] [int] NULL,
	[id_espessura] [int] NOT NULL,
	[id_largura] [int] NOT NULL,
	[id_norma] [int] NOT NULL,
	[id_revestimento] [int] NOT NULL,
	[id_superficie] [int] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[codigo_material] ADD  CONSTRAINT [PK_codigo_material] PRIMARY KEY CLUSTERED 
(
	[id_codigo_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_codigo_material_1] ON [dbo].[codigo_material]
(
	[id_comprador] ASC,
	[id_espessura] ASC,
	[id_forma] ASC,
	[id_largura] ASC,
	[id_material] ASC,
	[id_norma] ASC,
	[id_revestimento] ASC,
	[id_superficie] ASC,
	[id_tipo] ASC,
	[codigo_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_comprador] FOREIGN KEY([id_comprador])
REFERENCES [dbo].[comprador] ([id_comprador])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_comprador]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_comprimento] FOREIGN KEY([id_comprimento])
REFERENCES [dbo].[comprimento] ([id_comprimento])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_comprimento]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_espessura] FOREIGN KEY([id_espessura])
REFERENCES [dbo].[espessura] ([id_espessura])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_espessura]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_forma] FOREIGN KEY([id_forma])
REFERENCES [dbo].[forma] ([id_forma])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_forma]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_largura] FOREIGN KEY([id_largura])
REFERENCES [dbo].[largura] ([id_largura])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_largura]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_material] FOREIGN KEY([id_material])
REFERENCES [dbo].[material] ([id_material])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_material]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_norma] FOREIGN KEY([id_norma])
REFERENCES [dbo].[norma] ([id_norma])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_norma]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_revestimento] FOREIGN KEY([id_revestimento])
REFERENCES [dbo].[revestimento] ([id_revestimento])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_revestimento]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_superficie] FOREIGN KEY([id_superficie])
REFERENCES [dbo].[superficie] ([id_superficie])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_superficie]
GO
ALTER TABLE [dbo].[codigo_material]  WITH CHECK ADD  CONSTRAINT [FK_codigo_material_tipo] FOREIGN KEY([id_tipo])
REFERENCES [dbo].[tipo] ([id_tipo])
GO
ALTER TABLE [dbo].[codigo_material] CHECK CONSTRAINT [FK_codigo_material_tipo]
GO
