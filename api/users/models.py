from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    Male = "M"
    Female = "F"
    Undefined = "U"

    Gender = [(Male, "Male"), (Female, "Female"), (Undefined, "Undefined")]

    name = models.CharField(max_length=255) 
    cpf = models.CharField(max_length=14, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    job = models.CharField(max_length=50, null=False)
    birth_date = models.DateField()
    is_active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    gender = models.CharField(max_length=1, choices=Gender, default=Undefined)
    username = None

    USERNAME_FIELD ='cpf'
    REQUIRED_FIELDS = []