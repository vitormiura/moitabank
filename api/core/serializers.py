from rest_framework import serializers
from random import randint
from .models import Account, Card, Address, Contacts, Account, Loan, Transaction, BankStatement, LoanPayment

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('__all__')
    
    number = serializers.SerializerMethodField(method_name='cardNumber')
    cvv = serializers.SerializerMethodField(method_name='randCvv')
    expiration_date = serializers.SerializerMethodField(method_name='randExp')

    def randCvv(self, rand): 
        rand = f"{randint(100,999)}"
        return rand

    def randExp(self, rand):
        rand = f"{randint(1,12)}/{randint(27,32)}" 
        return rand

    def cardNumber(self, rand):
        rand = f"{randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)} {randint(1000,9999)}"
        return rand

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('__all__')

    number = serializers.SerializerMethodField(method_name='randNumber')
    agency = serializers.SerializerMethodField(method_name='randAgency')

    def randNumber(self, rand):
        rand = f"{randint(10000,99999)}-{randint(0,9)}" 
        return rand
    def randAgency(self, rand):
        rand = f"{randint(4000,9999)}" 
        return rand

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
