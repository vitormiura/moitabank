from rest_framework import serializers
from random import randint
from .models import Account, Card, Address, Contacts, Account, Loan, Transaction, BankStatement, LoanPayment, Deposit

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('__all__')

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('__all__')

class DepositSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deposit
        fields = ('__all__')

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('__all__')

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = ('__all__')


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ('__all__')
    
class LoanPaySerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanPayment
        fields = ('__all__')

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('__all__')

class BankStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankStatement
        fields = ('__all__')
