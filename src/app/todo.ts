import { Injectable,signal } from '@angular/core';
import { Task } from './models/task';

@Injectable({
    providedIn:'root'
})
export class TodoService {
    tasks=signal<Task[]>([]);

    deleteTask(id:number){
        this.tasks.update(tasks=>
            tasks.filter(task=>task.id!==id)
        )
    }

    updateTask(
  id: number,
  title: string,
  description: string
) {

  this.tasks.update(tasks =>
    tasks.map(task => {

      if (task.id === id) {

        return {
          ...task,
          title: title,
          description: description
        };

      }

      return task;

    })
  );

}
}
