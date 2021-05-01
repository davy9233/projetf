from django.db import models

# Create your models here.
class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nom = models.TextField()
    prenom = models.TextField()
    email = models.TextField()
    password = models.TextField()

    class Meta:
        managed = True
        db_table = 'user'