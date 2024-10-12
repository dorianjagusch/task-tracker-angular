import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { DatePipe, NgStyle } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task?: Task;
  faTimes = faTimes;
}
