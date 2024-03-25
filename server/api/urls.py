from django.urls import path, include
from rest_framework import routers
from api.tours.resourceview import TourViewSet, ReviewViewSet
from api.auth.resourceview import RegisterUserView

router = routers.DefaultRouter()
router.register('tours', TourViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/register', RegisterUserView.as_view()),
    path('api/auth/', include('rest_framework.urls'))
]
