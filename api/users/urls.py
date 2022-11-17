# from django.contrib import admin
from django.urls import path, include
from .views import RegisterView, LoginView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
]
