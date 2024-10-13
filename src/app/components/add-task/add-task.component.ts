import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/Task';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  text: string = '';
  date: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    if (!this.date) {
      alert('Please add a date');
      return;
    }
    if (new Date(this.date) < new Date()) {
      alert('Please add a future date');
      return;
    }

    const newTask: Task = {
      task: this.text,
      date: new Date(this.date),
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.date = '';
    this.reminder = false;
  }
}
