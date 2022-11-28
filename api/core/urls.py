from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('card', views.Card, basename='card')
router.register('address', views.Address, basename='address')
router.register('contacts', views.Contacts, basename='contacts')
router.register('accounts', views.Accounts, basename='accounts')
router.register('loan', views.Loan, basename='loan')
router.register('lopayment', views.LoanPayment, basename='loanpayment')

urlpatterns = router.urls