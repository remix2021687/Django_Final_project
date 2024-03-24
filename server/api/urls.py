from django.urls import path, include
from rest_framework import routers
from api.tours.resourceview import TourViewSet, ReviewViewSet

router = routers.DefaultRouter()
router.register('tours', TourViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('api/', include(router.urls))
]
