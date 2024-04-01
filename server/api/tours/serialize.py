from tours.models import Tour, BusTourType, TourReview
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class TourReviewSerializerPost(serializers.ModelSerializer):
    rate = serializers.IntegerField(required=True)

    def validate(self, attrs):
        if attrs['rate'] > 5:
            raise serializers.ValidationError({'rate': "Rate mustn't be greater than 5"})
        elif attrs['rate'] < 1:
            raise serializers.ValidationError({'rate': "The rating should not be less than 1"})
        return attrs

    class Meta:
        model = TourReview
        fields = ('id', 'tours', 'author', 'rate', 'text', 'date')


class TourReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = TourReview
        fields = ('id', 'tours', 'author', 'rate', 'text', 'date')


class TourSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ('id', 'name', 'tour_bus_type', 'tour_tags', 'description',)


class TourSerializer(serializers.ModelSerializer):
    tour_tags = serializers.StringRelatedField(many=True)
    tour_bus_type = serializers.StringRelatedField(read_only=True)
    reviews = TourReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = ('id', 'name', 'tour_bus_type', 'description', 'tour_tags', 'reviews', 'date')
