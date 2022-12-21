SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proposta](
	[id_proposta] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[id_cotacao] [int] NOT NULL,
	[observacao] [varchar](1000) NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[proposta] ADD  CONSTRAINT [PK_proposta] PRIMARY KEY CLUSTERED 
(
	[id_proposta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_proposta_1] ON [dbo].[proposta]
(
	[id_usuario] ASC,
	[id_cotacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[proposta]  WITH CHECK ADD  CONSTRAINT [FK_proposta_cotacao] FOREIGN KEY([id_cotacao])
REFERENCES [dbo].[cotacao] ([id_cotacao])
GO
ALTER TABLE [dbo].[proposta] CHECK CONSTRAINT [FK_proposta_cotacao]
GO
ALTER TABLE [dbo].[proposta]  WITH CHECK ADD  CONSTRAINT [FK_proposta_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[proposta] CHECK CONSTRAINT [FK_proposta_usuario]
GO
