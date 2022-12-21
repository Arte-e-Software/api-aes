SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[superficie](
	[id_superficie] [int] IDENTITY(1,1) NOT NULL,
	[id_material] [int] NOT NULL,
	[nome] [varchar](100) NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[superficie] ADD  CONSTRAINT [PK_superficie] PRIMARY KEY CLUSTERED 
(
	[id_superficie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_superficie_1] ON [dbo].[superficie]
(
	[id_material] ASC,
	[nome] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[superficie]  WITH CHECK ADD  CONSTRAINT [FK_superficie_material] FOREIGN KEY([id_material])
REFERENCES [dbo].[material] ([id_material])
GO
ALTER TABLE [dbo].[superficie] CHECK CONSTRAINT [FK_superficie_material]
GO
