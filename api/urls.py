from django.urls import path

from . import views
from .views import WorkspaceList, WorkspaceDetail, task_list, create_task
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('workspaces/', WorkspaceList.as_view(), name='workspace-list'),
    path('workspaces/<int:pk>/', WorkspaceDetail.as_view(), name='workspace-detail'),

    path('tasks/', task_list, name='task-list'),
    path('tasks/create/', create_task, name='create-task'),

]