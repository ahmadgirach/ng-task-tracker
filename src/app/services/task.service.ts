import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

import { Observable } from 'rxjs';

import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_URL = 'http://localhost:5000/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL)
  }

  deleteTask(taskId: number | undefined): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}/${taskId}`)
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.API_URL}/${task.id}`, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task, httpOptions)
  }
}
