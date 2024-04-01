from rest_framework import viewsets
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .permission import IsOwnerOrReadOnly
from .serialize import TourSerializer, TourSerializerPost, TourReviewSerializerPost
from tours.models import Tour, TourReview


class TourViewSet(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [AllowAny]


class TourPostViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializerPost
    permission_classes = [IsAuthenticated, IsAdminUser]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = TourReview.objects.all()
    serializer_class = TourReviewSerializerPost
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
