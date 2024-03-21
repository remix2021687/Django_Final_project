from django.urls import path, include
from rest_framework import routers
from api.tours.resourceview import TourViewSet

router = routers.DefaultRouter()
router.register('tours', TourViewSet)

urlpatterns = [
    path('api/', include(router.urls))
]