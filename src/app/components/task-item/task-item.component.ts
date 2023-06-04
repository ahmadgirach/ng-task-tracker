import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faTimes = faTimes

  @Input() task?: Task
  @Output() onDeleteTask = new EventEmitter<Task>()
  @Output() onToggleReminder = new EventEmitter<Task>()

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task)
  }
}
