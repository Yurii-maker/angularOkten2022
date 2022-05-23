import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsResolver} from "./services/postsResolvers/posts.resolver";
import {CanLeaveGuard} from "../../services/guards/can-leave.guard";
import {CanGoToGuard} from "../../services/guards/can-go-to.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostsResolver}, canDeactivate: [CanLeaveGuard],
    canActivate: [CanGoToGuard], children: [
      {
        path: ':id', component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
