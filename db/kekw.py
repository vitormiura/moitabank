from enum import auto
from itertools import pairwise
from secrets import choice
from tkinter.messagebox import NO
from django.db import models

# Create your models here.

class Cliente(models.Model):
    MASCULINO = 'M'
    FEMININO = 'F'
    INDEFINIDO = 'I'

    GENERO = [
        (MASCULINO, 'Masculino'),
        (FEMININO, 'Feminino'),
        (INDEFINIDO, 'Indefinido')
    ]

    nome_completo = models.CharField(max_length=100)
    data_nacimento = models.DateField()
    cnpj = models.CharField(max_length=)
    empregado = models.BooleanField()
    sexo = models.CharField(
        max_length = 1,
        choices = GENERO,
        default = INDEFINIDO,
    )

class Usuario(models.Model):
    cpf = models.CharField(max_length=14)
    senha = models.CharField(max_length=16)
    estado = models.BooleanField()
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)

class Endereco(models.Model):
    pais = models.CharField(max_length=30)
    uf = models.CharField(max_length=2)
    cidade = models.CharField(max_length=50)
    bairro = models.CharField(max_length=50)
    rua = models.CharField(max_length=50)
    logradouro = models.CharField(max_length=30)
    numero = models.PositiveSmallIntegerField()
    cep = models.CharField(max_length=)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)

class Contatos(models.Model):
    telefone = models.CharField(max_length=15)
    email = models.EmailField()
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)

class Favoritos(models.Model):
    cpf = models.CharField(max_length=14) #como eu vou colocar uma chave estrangeira de uma entidade que não existe
    nome = models.CharField(max_length=100)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)

class Conta(models.Model):
    CORRENTE = 'C'
    POUPANCA = 'P'
    SALARIO = 'S'

    TIPO_CONTA = [
        (CORRENTE, 'Corrente'),
        (POUPANCA, 'Poupanca'),
        (SALARIO, 'Salario'),
    ]

    saldo = models.DecimalField(decimal_places=2) #como eu informo o maximo de casas decimais vai ter sem ter que informar o maximo de digitos
    salario = models.DecimalField(decimal_places=2) #como eu informo o maximo de casas decimais vai ter sem ter que informar o maximo de digitos
    numero = models.PositiveIntegerField() #O PositiveIintegerField é o suficiente para poder suportar esse tipo de dado
    agencia = models.PositiveIntegerField() #O PositiveIintegerField é o suficiente para poder suportar esse tipo de dado
    tipo = models.CharField(
        max_length=1,
        choices=TIPO_CONTA,
    )
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)

class Emprestimos(models.Model):
    APROVADO = 'A'
    REPROVADO = 'R'
    PAGANDO = 'P'
    ESPERA = 'E'

    CONDICAO = [
        (APROVADO, 'Aprovado'),
        (REPROVADO, 'Reprovado'),
        (PAGANDO, 'Pagando'),
        (ESPERA, 'Em espera para aprovação')
    ]

    valor = models.DecimalField(decimal_places=2) #como eu informo o maximo de casas decimais vai ter sem ter que informar o maximo de digitos
    valor_com_juros = models.DecimalField(decimal_places=2) #como eu informo o maximo de casas decimais vai ter sem ter que informar o maximo de digitos
    data = models.DateTimeField(auto_now_add=True)
    juros = models.DecimalField()
    validade = models.DateField()
    condicao = models.CharField(
        max_length=1,
        choices=CONDICAO,
        default=ESPERA,
    )
    conta = models.ForeignKey(Conta, on_delete=models.PROTECT)

class PagamentoEmprestimo(models.Model):
    parcelas = models.PositiveSmallIntegerField()
    data_vencimento = models.DateTimeField(auto_now_add=True)
    data_pagamento = models.DateTimeField(auto_now_add=True)
    emprestimo = models.ForeignKey(Emprestimos, on_delete=models.PROTECT)

class Extrato(models.Model):
    ENTRADA = 'E'
    SAIDA = 'S'

    TIPOS = [
        (ENTRADA, 'Entrada'),
        (SAIDA, 'Saida'),
    ]

    valor = models.DecimalField(decimal_places=2) #como eu informo o maximo de casas decimais vai ter sem ter que informar o maximo de digitos
    data = models.DateTimeField(auto_now_add=True)
    descricao = models.CharField(max_length=100)
    tipo = models.CharField(
        max_length=1,
        choices=TIPOS,
    )
    conta = models.ForeignKey(Conta, on_delete=models.PROTECT)



class Cartao(models.Model):
    DEBITO = 'D'
    CREDITO = 'C'

    TIPOS = [
        (DEBITO, 'Debito'),
        (CREDITO, 'Credito'),
    ] #É valido criar esse tipo de lógica para apenas dois tipos de dados

    BLOQUEADO = 'B'
    UTILIZAVEL = 'U'

    ESTADO = [
        (BLOQUEADO,'Bloqueado'),
        (UTILIZAVEL,'Utilizavel'),
    ] #Colocar como bool

    numero = models.CharField(max_length=20)
    cvv = models.PositiveSmallIntegerField()
    data_validade = models.DateField()
    tipo = models.CharField(
        max_length=1,
        choices=TIPOS,
    )
    estado = models.CharField(
        max_length=1,
        choices=ESTADO,
    )
    conta = models.ForeignKey(Conta, on_delete=models.PROTECT)

class Transacoes(models.Model):
    valor = models.DecimalField(max_digits=10,decimal_places=2)
    data = models.DateTimeField(auto_now_add=True)
    destinatario = models.ForeignKey(Conta, on_delete=models.PROTECT, related_name='destinatario')
    remetente = models.ForeignKey(Conta, on_delete=models.PROTECT, related_name='remetente')

class Fatura(models.Model):
    pass

class Solicitacao(models.Model): #quais vao ser os atributos dele
    pass