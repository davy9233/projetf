# Generated by Django 3.0 on 2021-05-13 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_imageticket_iduser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imageticket',
            name='uriimage',
            field=models.ImageField(null=True, upload_to='\\image'),
        ),
    ]
