 SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[fornecedor](
	[id_fornecedor] [int] IDENTITY(1,1) NOT NULL,
	[id_assinante] [int] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[fornecedor] ADD  CONSTRAINT [PK_fornecedor] PRIMARY KEY CLUSTERED 
(
	[id_fornecedor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_fornecedor_1] ON [dbo].[fornecedor]
(
	[id_assinante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[fornecedor]  WITH CHECK ADD  CONSTRAINT [FK_fornecedor_assinante] FOREIGN KEY([id_assinante])
REFERENCES [dbo].[assinante] ([id_assinante])
GO
ALTER TABLE [dbo].[fornecedor] CHECK CONSTRAINT [FK_fornecedor_assinante]
GO
