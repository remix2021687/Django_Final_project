from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permission import IsAdminOrReadOnly
from .serialize import TourSerializer
from tours.models import Tour


class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [IsAdminOrReadOnly]
