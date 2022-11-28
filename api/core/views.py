
from rest_framework import viewsets
from .models import Card, Address, Contacts, Account, Loan, Transaction, BankStatement, LoanPayment
from .serializers import CardSerializer, AddressSerializer, ContactsSerializer, AccountSerializer, LoanPaySerializer, LoanSerializer, TransactionSerializer, BankStateSerializer

class Card(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class Address(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class Contacts(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer

class Accounts(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class Loan(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

class LoanPayment(viewsets.ModelViewSet):
    queryset = LoanPayment.objects.all()
    serializer_class = LoanPaySerializer

class Transaction(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class BankStatement(viewsets.ModelViewSet):
    queryset = BankStatement.objects.all()
    serializer_class = BankStateSerializer