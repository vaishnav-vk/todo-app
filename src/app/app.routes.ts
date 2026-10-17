import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { AddTask } from './add-task/add-task';
import { ViewTask } from './view-task/view-task';
import { EditTask } from './edit-task/edit-task';

export const routes: Routes = [
    {path:'',
    component:TaskList

    },
    {
        path:'add',
        component:AddTask
    },
    {
        path:'task/:id',
        component:ViewTask
    },
    {
        path:'edit/:id',
        component:EditTask
    }
];
