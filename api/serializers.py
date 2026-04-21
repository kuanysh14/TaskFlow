from rest_framework import serializers
from .models import Workspace, Task, Tag
from django.contrib.auth.models import User

class WorkspaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workspace
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class TagSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50)

class UserSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()