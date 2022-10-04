from unicodedata import decimal
from django.db import models
from django.conf import settings

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
    cpf = models.CharField(max_length=14, unique=True, null=False)
    password = models.CharField(max_length=16, null=False)
    is_active = models.BooleanField()
    birth_date = models.DateField()
    cnpj = models.CharField(max_length=18)
    is_employed = models.BooleanField()
    gender = models.CharField(max_length=1, choices=Gender, default=Undefined) 
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.name

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

class Contacts(models.Model):
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    client = models.ForeignKey(Client, on_delete=models.PROTECT)

class Account(models.Model):
    CHECKING = 'C'
    SAVING = 'S'
    WAGE = 'W'

    ACCOUNT_TYPE = [
        (CHECKING, 'Checking Account'),
        (SAVING, 'Saving Account'),
        (WAGE, 'Wage Account'),
    ]

    balance = models.DecimalField(decimal_places = 2, null=0, max_digits=2)
    salary = models.DecimalField(decimal_places=2, max_digits=2)
    number = models.PositiveIntegerField()
    agency = models.PositiveIntegerField()
    type = models.CharField(max_length=1, choices=ACCOUNT_TYPE)
    client = models.ForeignKey(Client, on_delete=models.PROTECT)

class Loan(models.Model):
    APPROVED = 'A'
    DENIED = 'D'
    PAYING = 'P'
    WAITING = 'W'

    CONDITION = [
        (APPROVED, 'Approved'),
        (DENIED, 'Denied'),
        (PAYING, 'Paying'),
        (WAITING, 'Waiting'),
    ]

    value = models.DecimalField(decimal_places=2, max_digits=2)
    value_fees = models.DecimalField(decimal_places=2, max_digits=2)
    date = models.DateTimeField(auto_now_add=True)
    fee = models.DecimalField(decimal_places=2, max_digits=2)
    expiration = models.DateField()
    condition = models.CharField(max_length=1, choices=CONDITION, default=WAITING)
    account = models.ForeignKey(Account, related_name='Loan', on_delete=models.PROTECT)
