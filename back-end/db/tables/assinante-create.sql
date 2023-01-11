SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[assinante](
	[id_assinante] [int] IDENTITY(1,1) NOT NULL,
	[nome] [varchar](200) NOT NULL,
	[categoria] [varchar] (50) NOT NULL,
    [cnpj] [char](14) NOT NULL,
	[cep] [char](8) NOT NULL,
	[cidade] [varchar](100) NOT NULL,
	[uf] [char](2) NOT NULL,
	[telefone] [varchar] (15) NOT  NULL,
    [email] [varchar] (200) NOT NULL,
    [crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[assinante] ADD  CONSTRAINT [PK_assinante] PRIMARY KEY CLUSTERED 
(
	[id_assinante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_assinante_1] ON [dbo].[assinante]
(
	[nome] ASC,
	[cnpj] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

