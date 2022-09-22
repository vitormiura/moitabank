from django.db import models

class Client(models.Model):
    Male = 'M'
    Female = 'F'
    Undefined = 'U'

    Gender = [
        (Male, 'Male'),
        (Female, 'Female'),
        (Undefined, 'Undefined')
    ]

    name = models.CharField(max_length=111, null=False)
    birth_date = models.DateField()
    cnpj = models.CharField(max_length=18)
    empregado = models.BooleanField()
    gender = models.CharField(max_length=1, choices=Gender, default=Undefined) 

class User(models.Model):
    cpf = models.CharField(max_length=14, unique=True, null=False)
    password = models.CharField(max_length=16)
    is_active = models.BooleanField()
    client = models.ForeignKey(Client, on_delete=models.PROTECT)

class Address(models.Model):
    country = models.CharField(max_length=55)
    state = models.CharField(max_length=55)
    city = models.CharField(max_length=55)
    disctrict = models.CharField(max_length=55)
    street = models.CharField(max_length=55)
    number = models.PositiveSmallIntegerField()
    complement = models.CharField(max_length=55)
    zip_code = models.CharField(max_length=30)
    client = models.ForeignKey(Client, on_delete=models.PROTECT)

