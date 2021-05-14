from django.shortcuts import render

from .serializers import TicketSerializer
from .serializers import UserSerializer
from rest_framework import viewsets      
from .models import User
from .models import imageTicket              
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.parsers import MultiPartParser

class UserViewSet(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class imageTicketViewset(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    queryset = imageTicket.objects.all()
    permission_classes=[IsAuthenticated]
    parser_classes=[MultiPartParser]


    