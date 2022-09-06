import { Component, OnInit } from '@angular/core';
 
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Task[] = [];

  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() =>{
      this.tasks =this.tasks.filter( (t) =>{ 
        return t.id !== task.id
        })
    })
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskRemider(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) =>{ 
      this.tasks.push(task);
    })
    
  }

}
