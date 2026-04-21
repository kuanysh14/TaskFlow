import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace-list.html',
  styleUrl: './workspace-list.css'
})
export class WorkspaceListComponent implements OnInit {
  workspaces: any[] = [];

  constructor(
    public apiService: ApiService,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.apiService.getWorkspaces().subscribe({
      next: (data) => {
        console.log('Data from API:', data);
        this.workspaces = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('API Error:', err)
    });
  }

  viewTasks(id: number) {
    this.router.navigate(['/workspaces', id, 'tasks']);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
