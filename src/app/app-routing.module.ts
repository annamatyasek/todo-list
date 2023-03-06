import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const APP_ROUTES: Route[] = [{ path: 'lista', component: TodoListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
