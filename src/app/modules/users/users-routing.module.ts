import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersResolver} from "./services/usersResolvers/users.resolver";
import {UserResolver} from "./services/usersResolvers/user.resolver";
import {CanLeaveGuard} from "../../services/guards/can-leave.guard";
import {CanGoToGuard} from "../../services/guards/can-go-to.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolver}, canDeactivate: [CanLeaveGuard],
    canActivate: [CanGoToGuard], children: [{
      path: ':id', component: UserDetailsComponent, resolve: {user: UserResolver}
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
