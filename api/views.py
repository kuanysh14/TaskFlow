from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Workspace, Task
from .serializers import WorkspaceSerializer, TaskSerializer

class WorkspaceList(APIView):
    def get(self, request):
        items = Workspace.objects.all()
        return Response(WorkspaceSerializer(items, many=True).data)

class WorkspaceDetail(APIView):
    def get(self, request, pk):
        item = Workspace.objects.get(pk=pk)
        return Response(WorkspaceSerializer(item).data)

@api_view(['GET'])
def task_list(request):
    tasks = Task.objects.all()
    return Response(TaskSerializer(tasks, many=True).data)

@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

