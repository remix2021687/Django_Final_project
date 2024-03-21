from tours.models import Tour
from rest_framework import serializers


class TourSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tour
        fields = ['id', 'name', 'tour_bus_type', 'date']
