from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tests.views import TestViewSet
from devices.views import DeviceViewSet
from tags.views import TagViewSet

API_PREFIX = 'api/v2/'

router = DefaultRouter()

router.register(r'tests', TestViewSet)
router.register(r'devices', DeviceViewSet)
router.register(r'tags', TagViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path(API_PREFIX, include(router.urls)),
]
