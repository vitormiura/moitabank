from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)       

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.Model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance