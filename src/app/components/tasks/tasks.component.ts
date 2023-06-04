import { Component } from '@angular/core';

import { Task } from "../../Task"
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []

  constructor(
    private tasksService: TaskService,
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task?.id).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task?.id))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.tasksService.toggleTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((t) => this.tasks.push(t))
  }
}
