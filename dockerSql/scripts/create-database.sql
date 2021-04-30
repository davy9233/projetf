CREATE DATABASE dbscan;
GO
USE dbscan;
GO

if not exists (select * from sysobjects where name='user' and xtype='U')
CREATE TABLE [dbo].[user](
	[idUser] [int] IDENTITY (1,1) NOT NULL,
	[nom] [nvarchar](max) NOT NULL,
	[prenom] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO