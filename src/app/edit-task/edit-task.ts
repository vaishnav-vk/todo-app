import { Component,inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoService } from '../todo';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-edit-task',
  styleUrl: './edit-task.css',
  templateUrl: './edit-task.html',
})
export class EditTask {
  todoService=inject(TodoService)
  route=inject(ActivatedRoute)
  router=inject(Router)
  taskId=Number(this.route.snapshot.paramMap.get('id'))
  task=this.todoService.tasks().find(
   task=>task.id===this.taskId 
  )
  title=this.task?.title??'';
  description=this.task?.description??'';
  editTask(){
    this.todoService.updateTask(
      this.taskId,
      this.title,
      this.description
    )
    this.router.navigate(['/']);
  }
}
