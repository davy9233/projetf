# Generated by Django 3.0 on 2021-05-14 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20210514_0935'),
    ]

    operations = [
        migrations.AddField(
            model_name='imageticket',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
