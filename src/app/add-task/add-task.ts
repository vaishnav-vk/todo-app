import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo';

@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  todoService=inject(TodoService);
  title='';
  description='';

  addTask() {

  const newTask = {
    id: Date.now(),
    title: this.title,
    description: this.description,
    completed: false
  };

  this.todoService.tasks.update(tasks => [
    ...tasks,
    newTask
  ]);

  this.title = '';
  this.description = '';
}
}
