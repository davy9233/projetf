from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .serializers import UserSerializer 
from rest_framework import viewsets      
from users.models import User                 
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    
