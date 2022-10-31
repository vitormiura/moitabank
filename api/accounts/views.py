
from rest_framework import viewsets
from .models import Client, Card, Address, Contacts, Account, Loan, Transaction, BankStatement, LoanPayment
from .serializers import ClientSerializer, CardSerializer, AddressSerializer, ContactsSerializer, AccountSerializer, LoanPaySerializer, LoanSerializer, TransactionSerializer, BankStateSerializer

class Client(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class Card(viewsets.ModelViewSet):
    query = Card.objects.all()
    serializer_class = CardSerializer

class Address(viewsets.ModelViewSet):
    query = Address.objects.all()
    serializer_class = AddressSerializer

class Contacts(viewsets.ModelViewSet):
    query = Contacts.objects.all()
    serializer_class = ContactsSerializer

class Accounts(viewsets.ModelViewSet):
    query = Account.objects.all()
    serializer_class = AccountSerializer

class Contacts(viewsets.ModelViewSet):
    query = Contacts.objects.all()
    serializer_class = ContactsSerializer

class Loan(viewsets.ModelViewSet):
    query = Loan.objects.all()
    serializer_class = LoanSerializer

class LoanPayment(viewsets.ModelViewSet):
    query = LoanPayment.objects.all()
    serializer_class = LoanPaySerializer

class Transaction(viewsets.ModelViewSet):
    query = Transaction.objects.all()
    serializer_class = TransactionSerializer

class BankStatement(viewsets.ModelViewSet):
    query = BankStatement.objects.all()
    serializer_class = BankStateSerializer