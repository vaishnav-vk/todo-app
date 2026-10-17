import { Component,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo';

@Component({
  imports: [],
  selector: 'app-view-task',
  styleUrl: './view-task.css',
  templateUrl: './view-task.html',
})
export class ViewTask {
   todoService = inject(TodoService);
  route = inject(ActivatedRoute);

  taskId = Number(this.route.snapshot.paramMap.get('id'));

  task = this.todoService.tasks().find(
    task => task.id === this.taskId
  );
}
  