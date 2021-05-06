from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from . import views


router = routers.DefaultRouter()
router.register(r'api', views.UserViewSet,'api')


# Setup automatic URL routing
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
   ]