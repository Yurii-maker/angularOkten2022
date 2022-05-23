import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersService} from "./services/users.service";
import {UserResolver} from "./services/usersResolvers/user.resolver";
import {UsersResolver} from "./services/usersResolvers/users.resolver";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    UserResolver,
    UsersResolver
  ]
})
export class UsersModule {
}
