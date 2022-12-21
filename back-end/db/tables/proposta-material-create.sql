SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proposta_material](
	[id_proposta_material] [int] IDENTITY(1,1) NOT NULL,
	[id_proposta] [int] NOT NULL,
	[id_codigo_material] [int] NOT NULL,
	[prazo_de_entrega] [datetime] NOT NULL,
	[preco] [float] NOT NULL,
	[forma_de_pagamento] [varchar](100) NOT NULL,
	[icms] [float] NOT NULL,
	[ipi] [float] NOT NULL,
	[preco_final] [float] NOT NULL,
	[fob_cif] [char](3) NOT NULL,
	[crdate] [datetime] NOT NULL,
	[isactive] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[proposta_material] ADD  CONSTRAINT [PK_proposta_material] PRIMARY KEY CLUSTERED 
(
	[id_proposta_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [Index_proposta_material_1] ON [dbo].[proposta_material]
(
	[id_proposta] ASC,
	[id_codigo_material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[proposta_material]  WITH CHECK ADD  CONSTRAINT [FK_proposta_material_codigo_material] FOREIGN KEY([id_codigo_material])
REFERENCES [dbo].[codigo_material] ([id_codigo_material])
GO
ALTER TABLE [dbo].[proposta_material] CHECK CONSTRAINT [FK_proposta_material_codigo_material]
GO
ALTER TABLE [dbo].[proposta_material]  WITH CHECK ADD  CONSTRAINT [FK_proposta_material_proposta] FOREIGN KEY([id_proposta])
REFERENCES [dbo].[proposta] ([id_proposta])
GO
ALTER TABLE [dbo].[proposta_material] CHECK CONSTRAINT [FK_proposta_material_proposta]
GO
