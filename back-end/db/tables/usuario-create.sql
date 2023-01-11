SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[id_assinante] [int] NOT NULL,
	[nome] [varchar](200) NOT NULL,
	[cpf] [char](11) NOT NULL,
	[email] [varchar](200) NOT NULL,
	[celular] [char](14) NOT NULL,
	[master] [bit] NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[usuario] ADD  CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_usuario_1] ON [dbo].[usuario]
(
	[id_assinante] ASC,
	[email] ASC,
	[cpf] ASC,
	[celular] ASC,
	[nome] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_usuario_assinante] FOREIGN KEY([id_assinante])
REFERENCES [dbo].[assinante] ([id_assinante])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_usuario_assinante]
GO
