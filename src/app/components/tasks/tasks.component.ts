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

}
