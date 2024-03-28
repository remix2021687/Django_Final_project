from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permission import IsAdminOrReadOnly, IsOwnerOrReadOnly
from .serialize import TourSerializer, TourReviewSerializerPost
from tours.models import Tour, TourReview


class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [IsAdminOrReadOnly]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = TourReview.objects.all()
    serializer_class = TourReviewSerializerPost
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
