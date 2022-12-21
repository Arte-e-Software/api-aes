SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[espessura](
	[id_espessura] [int] IDENTITY(1,1) NOT NULL,
	[id_material] [int] NOT NULL,
	[unidade] [char](2) NOT NULL,
	[valor] [float] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[espessura] ADD  CONSTRAINT [PK_espessura] PRIMARY KEY CLUSTERED 
(
	[id_espessura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_espessura_1] ON [dbo].[espessura]
(
	[id_material] ASC,
	[unidade] ASC,
	[valor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[espessura]  WITH CHECK ADD  CONSTRAINT [FK_espessura_material] FOREIGN KEY([id_material])
REFERENCES [dbo].[material] ([id_material])
GO
ALTER TABLE [dbo].[espessura] CHECK CONSTRAINT [FK_espessura_material]
GO
