import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/login/', credentials).pipe(
    tap((response: any) => {
      localStorage.setItem('access_token', response.access);
    })
  );
}

  getWorkspaces(): Observable<any[]> {
  const token = localStorage.getItem('access_token');
  const headers = { Authorization: `Bearer ${token}` };
  return this.http.get<any[]>(`${this.BASE_URL}/workspaces/`, { headers });
  }

  getTasks(workspaceId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.BASE_URL}/workspaces/${workspaceId}/tasks/`);
  }


}
