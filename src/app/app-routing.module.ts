import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./routing/users/users.component";
import {HomeComponent} from "./routing/home/home.component";
import {ServersComponent} from "./routing/servers/servers.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {UserComponent} from "./routing/users/user/user.component";

const routes: Routes = [
  {path: '', component: RecipeBookComponent},
  {path: 'routes', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
  {path: 'servers', component:ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
