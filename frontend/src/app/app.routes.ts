import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { WorkspaceListComponent } from './components/workspace-list/workspace-list';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'workspaces', component: WorkspaceListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
