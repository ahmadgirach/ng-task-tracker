import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;

  @Output() onAddTask = new EventEmitter<Task>();

  constructor(
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  onSubmit() {
    if (!this.text) {
      alert("Please enter task!")
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }
    this.onAddTask.emit(newTask)
    this.resetForm()
  }

  resetForm() {
    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
