from rest_framework import viewsets
# from rest_framework.decorators import action

from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .permission import IsAdminOrReadOnly
from .serialize import TourSerializer, TourReviewSerializer
from tours.models import Tour, TourReview


class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [IsAdminOrReadOnly]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = TourReview.objects.all()
    serializer_class = TourReviewSerializer
    permission_classes = [AllowAny]
