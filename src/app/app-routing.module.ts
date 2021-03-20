import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { UserListComponent } from './page/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user/:id',
    component: UserEditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
