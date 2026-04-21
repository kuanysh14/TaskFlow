from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.core_admin_url if hasattr(admin.site, 'core_admin_url') else admin.site.urls),
    path('admin/', admin.site.urls),

    path('api/', include('api.urls')),
]