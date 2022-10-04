from django.shortcuts import render
from rest_framework import viewsets
from .models import Client
from .serializers import ClientSerializer

class Client(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer