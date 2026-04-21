from django.contrib import admin
from .models import Workspace, Task, Tag

admin.site.register(Workspace)
admin.site.register(Task)
admin.site.register(Tag)