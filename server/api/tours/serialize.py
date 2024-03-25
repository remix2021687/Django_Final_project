from tours.models import Tour, BusTourType, TourReview
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class BusTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusTourType
        fields = ('id', 'name')


class TourReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = TourReview
        fields = ('id', 'tours', 'author', 'rate', 'text', 'date')


class TourSerializer(serializers.ModelSerializer):
    tour_bus_type = BusTypeSerializer(read_only=True)
    reviews = TourReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = ('id', 'name', 'tour_bus_type', 'reviews', 'date')
