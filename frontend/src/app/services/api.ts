import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWorkspaces(): Observable<any[]> {
    const mockData = [
      { id: 1, name: 'University Lab', description: 'Django + Angular tasks' },
      { id: 2, name: 'Personal Projects', description: 'Gym and Hobby' },
      { id: 3, name: 'Work', description: 'Office related tasks' }
    ];
    return of(mockData);
  }
}
