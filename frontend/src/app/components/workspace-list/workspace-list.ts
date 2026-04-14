import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace-list.html',
  styleUrl: './workspace-list.css'
})
export class WorkspaceListComponent implements OnInit {
  workspaces: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getWorkspaces().subscribe(data => {
      this.workspaces = data;
    });
  }

  viewTasks(id: number) {
    this.router.navigate(['/workspaces', id]);
  }
}
