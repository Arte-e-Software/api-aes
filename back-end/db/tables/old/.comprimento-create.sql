SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comprimento](
	[id_comprimento] [int] IDENTITY(1,1) NOT NULL,
	[id_material] [int] NOT NULL,
	[unidade] [char](2) NOT NULL,
	[valor] [float] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comprimento] ADD  CONSTRAINT [PK_comprimento] PRIMARY KEY CLUSTERED 
(
	[id_comprimento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_comprimento_1] ON [dbo].[comprimento]
(
	[id_material] ASC,
	[unidade] ASC,
	[valor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comprimento]  WITH CHECK ADD  CONSTRAINT [FK_comprimento_material] FOREIGN KEY([id_material])
REFERENCES [dbo].[material] ([id_material])
GO
ALTER TABLE [dbo].[comprimento] CHECK CONSTRAINT [FK_comprimento_material]
GO
