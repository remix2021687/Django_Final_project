from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.contrib.auth.models import User

from .permission import IsOwnerOrReadOnly, IsOnwerAccount
from .serialize import TourSerializer, TourSerializerCreate, TourSerializerList, TourReviewSerializerPost, \
    UserListSerializer, UserSerializer
from tours.models import Tour, TourReview


class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.request.user.is_staff and self.request.POST:
            return TourSerializerCreate
        if self.action == 'list':
            return TourSerializerList

        return TourSerializer


class UserListViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    # serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsOnwerAccount]

    def get_serializer_class(self):
        if self.action == 'list':
            return UserListSerializer

        return UserSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = TourReview.objects.all()
    serializer_class = TourReviewSerializerPost
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
