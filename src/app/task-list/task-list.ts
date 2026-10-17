import { Component,inject } from '@angular/core';
import { TodoService } from '../todo';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  todoService=inject(TodoService)

  deleteTask(id:number){
    this.todoService.deleteTask(id)
  }
}
