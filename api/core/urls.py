from django.urls import path, include
from rest_framework.routers import DefaultRouter

import importlib
collections = ['tests', 'devices', 'tags', 'plans']

API_PREFIX = 'api/v2/'

router = DefaultRouter()
for c in collections:
    router.register(
        fr'{c}', 
        getattr(
            importlib.import_module(f'{c}.views', c),
            f"{c[0].upper()}{c[1:-1]}ViewSet"
        )
    )

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path(API_PREFIX, include(router.urls)),
]
