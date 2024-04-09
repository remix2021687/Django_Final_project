from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .permission import IsOwnerOrReadOnly
from .serialize import TourSerializer, TourSerializerCreate, TourSerializerList, TourReviewSerializerPost
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


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = TourReview.objects.all()
    serializer_class = TourReviewSerializerPost
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
