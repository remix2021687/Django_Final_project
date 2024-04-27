from tours.models import Tour, TourReview, TourImgList
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'date_joined')


class TourImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourImgList
        fields = ('id', 'name_img', 'img_url')


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


class TourSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ('id', 'name', 'tour_bus_type', 'tour_tags', 'description')


class TourSerializerList(serializers.ModelSerializer):
    city = serializers.StringRelatedField()

    class Meta:
        model = Tour
        fields = ('id', 'name', 'description', 'preview_img', 'price', 'city')


class TourSerializer(serializers.ModelSerializer):
    city = serializers.StringRelatedField()
    tour_tags = serializers.StringRelatedField(many=True, read_only=True)
    tour_bus_type = serializers.StringRelatedField(read_only=True)
    img_list = TourImgSerializer(many=True)
    reviews = TourReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = ('id', 'name', 'tour_bus_type', 'description', 'tour_tags', 'img_list', 'city', 'reviews', 'date')
