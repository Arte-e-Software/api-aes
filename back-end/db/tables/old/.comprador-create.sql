SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comprador](
	[id_comprador] [int] IDENTITY(1,1) NOT NULL,
	[id_assinante] [int] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comprador] ADD  CONSTRAINT [PK_comprador] PRIMARY KEY CLUSTERED 
(
	[id_comprador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_comprador_1] ON [dbo].[comprador]
(
	[id_assinante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comprador]  WITH CHECK ADD  CONSTRAINT [FK_comprador_assinante] FOREIGN KEY([id_assinante])
REFERENCES [dbo].[assinante] ([id_assinante])
GO
ALTER TABLE [dbo].[comprador] CHECK CONSTRAINT [FK_comprador_assinante]
GO