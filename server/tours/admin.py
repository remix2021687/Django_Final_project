from django.contrib import admin
from tours.models import Tour, BusTourType, TourTags, TourReview, TourImgList, TourCity

admin.site.register((Tour, BusTourType, TourReview, TourTags, TourImgList, TourCity))

