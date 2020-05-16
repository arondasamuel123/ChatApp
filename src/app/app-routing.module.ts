import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'delete/:id', component: DeleteMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
