from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('client', views.Client, basename='client')

urlpatterns = router.urls