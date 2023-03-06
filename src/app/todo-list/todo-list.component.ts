import { Component, OnInit } from '@angular/core';
import { Todo2 } from 'src/app/models2/Todo2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos2!: Todo2[];
  constructor() {}

  ngOnInit(): void {
    this.todos2 = [
      {
        content: 'pierwsze zadanie juz jest',
        completed: false,
      },
      {
        content: 'drugie zadanie',
        completed: false,
      },
    ];
  }
}
