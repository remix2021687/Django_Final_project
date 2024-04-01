from django.contrib import admin
from tours.models import Tour, BusTourType, TourTags, TourReview

admin.site.register((Tour, BusTourType, TourReview, TourTags))

