from django.contrib import admin
from tours.models import Tour, BusTourType, TourReview

admin.site.register((Tour, BusTourType, TourReview))

