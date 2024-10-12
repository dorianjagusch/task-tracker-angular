import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../interfaces/Task';
import { CommonModule, DatePipe} from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task);
  }
}
