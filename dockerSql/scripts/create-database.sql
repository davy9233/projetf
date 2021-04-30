CREATE DATABASE dbscan;
GO
USE dbscan;
GO
CREATE TABLE [dbo].[user](
	[idUser] [int] NOT NULL,
	[nom] [nvarchar](max) NOT NULL,
	[prenom] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO