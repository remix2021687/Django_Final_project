from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from api.tours.resourceview import TourViewSet, TourPostViewSet, ReviewViewSet
from api.auth.resourceview import RegisterUserView

router = routers.DefaultRouter()
router.register('tours_create', TourPostViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('auth/', include('rest_framework.urls')),
    path('tours/', TourViewSet.as_view()),
    path('auth/register', RegisterUserView.as_view()),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/login/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
