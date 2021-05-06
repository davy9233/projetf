from django.conf.urls import include,url
from account.views import dashboard
# , register

urlpatterns = [
 
url(r"^account/", include("django.contrib.auth.urls")),
    url(r"^dashboard/", dashboard, name="dashboard"),
    # url(r"^register/", register, name="register"),
] 
  