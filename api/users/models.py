from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=255) 
    cpf = models.CharField(max_length=14, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD ='cpf'
    REQUIRED_FIELDS = []