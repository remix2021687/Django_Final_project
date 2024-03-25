from django.contrib.auth.models import User
from .serialize import RegisterUserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny


class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer
    permission_classes = [AllowAny]
