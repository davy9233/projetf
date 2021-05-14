from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import User
from .models import imageTicket


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['iduser','login']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = imageTicket
        fields = ['date','uriimage','idUser']

 

    def create(self, validated_data):
        
        print(validated_data)

     
        return imageTicket.objects.create(**validated_data)
 