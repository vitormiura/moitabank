from django.db import models
import users
from random import randint

class Card(models.Model):
    BLOCKED = "B"
    ACTIVE = "A"

    STATE = [(BLOCKED, "Blocked"), (ACTIVE, "Active")]

    number = models.CharField(max_length=20)
    cvv = models.CharField(max_length=3)
    expiration_date = models.CharField(max_length=5)
    state = models.CharField(max_length=1, choices=STATE, default=ACTIVE)
    client = models.ForeignKey('users.User', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.number = f"{randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)}"
        self.cvv = f"{randint(100,999)}"
        self.expiration_date = f"{randint(1,12)}/{randint(27,32)}" 

        super(Card, self).save(*args, **kwargs)
    
    def __str__(self) -> str:
        return self.numero
class Address(models.Model):
    country = models.CharField(max_length=55)
    state = models.CharField(max_length=55)
    city = models.CharField(max_length=55)
    disctrict = models.CharField(max_length=55)
    street = models.CharField(max_length=55)
    number = models.PositiveSmallIntegerField() 
    complement = models.CharField(max_length=55)
    zip_code = models.CharField(max_length=30)
    client = models.ForeignKey('users.User', on_delete=models.PROTECT)


class Contacts(models.Model):
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    client = models.ForeignKey('users.User', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)


class Account(models.Model):
    balance = models.DecimalField(decimal_places=2, null=0, max_digits=10)
    number = models.CharField(max_length=7)
    agency = models.CharField(max_length=4)
    client = models.ForeignKey('users.User', on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.number = f"{randint(10000,99999)}-{randint(0,9)}" 
        self.agency = f"{randint(4000,9999)}"

        super(Account, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.number

class Loan(models.Model):
    APPROVED = "A"
    DENIED = "D"
    PAYING = "P"
    WAITING = "W"

    CONDITION = [
        (APPROVED, "Approved"),
        (DENIED, "Denied"),
        (PAYING, "Paying"),
        (WAITING, "Waiting"),
    ]

    value = models.DecimalField(decimal_places=2, max_digits=2)
    value_fees = models.DecimalField(decimal_places=2, max_digits=2)
    date = models.DateTimeField(auto_now_add=True)
    fee = models.DecimalField(decimal_places=2, max_digits=2)
    expiration = models.DateField()
    condition = models.CharField(max_length=1, choices=CONDITION, default=WAITING)
    account = models.ForeignKey(Account, related_name="Loan", on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)


class Transaction(models.Model):
    value = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey(
        Account, on_delete=models.DO_NOTHING, related_name="recipient"
    )
    sender = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="sender")


class LoanPayment(models.Model):
    installments = models.PositiveSmallIntegerField(null=1)
    due_date = models.DateTimeField(auto_now_add=True)
    payment_date = models.DateTimeField(auto_now_add=True)
    loan = models.ForeignKey(Loan, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)

class BankStatement(models.Model):
    ENTRIES = "E"
    WITHDRAWALS = "W"

    CONDITIONS = [(ENTRIES, "Entries"), (WITHDRAWALS, "Withdrawals")]

    value = models.DecimalField(decimal_places=2, max_digits=9)
    date = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=1, choices=CONDITIONS)
    account = models.ForeignKey('users.User', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)

class Deposit(models.Model):
    account = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="account")
    value = models.DecimalField(decimal_places=2, max_digits=10)
    created_at = models.DateTimeField(auto_now_add=True)
