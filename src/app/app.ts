import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTask } from './add-task/add-task';
import { TaskList } from './task-list/task-list';
@Component({
  imports: [RouterOutlet,AddTask,TaskList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
}
