from django.shortcuts import render
from .serializers import UserSerializer 
from rest_framework import viewsets      
from .models import User                 
from rest_framework.decorators import api_view


class UserViewSet(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()
    
    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(login=self.request.query_params.get('username'))
        query_set = query_set.filter(password=self.request.query_params.get('pwd'))
        query_set.count()
        return query_set

    
    
    
    
      


