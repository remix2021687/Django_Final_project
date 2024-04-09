from django.contrib import admin
from tours.models import Tour, BusTourType, TourTags, TourReview, TourImgList

admin.site.register((Tour, BusTourType, TourReview, TourTags, TourImgList))

