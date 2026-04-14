import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { WorkspaceListComponent } from './components/workspace-list/workspace-list';
import { TaskDetailComponent } from './components/task-detail/task-detail';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'workspaces', component: WorkspaceListComponent },
  { path: 'workspaces/:id', component: TaskDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
