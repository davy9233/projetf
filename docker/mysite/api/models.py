from django.db import models

# Create your models here.

# Create your models here.
class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nom = models.TextField()
    prenom = models.TextField(blank=True)
    login = models.CharField(null=False,max_length=50,unique=True,blank=True)
    email = models.EmailField()
    password1 = models.CharField(max_length=50)
    password2 = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'user'


class imageTicket(models.Model): 
     
    idTicket = models.AutoField(db_column='idTicket', primary_key=True)  # Field name made lowercase.
    date = models.DateTimeField(auto_now_add=True)
    prob = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=2)
    uriimage = models.TextField(null=True)
    idUser= models.IntegerField(null=True)
    image = models.ImageField(upload_to='images/',null=True)


    class Meta:
        managed = True
        db_table = 'ticket' 