import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentsResolver} from "./services/commentsResolvers/comments.resolver";
import {CommentResolver} from "./services/commentsResolvers/comment.resolver";
import {CanLeaveGuard} from "../../services/guards/can-leave.guard";
import {CanGoToGuard} from "../../services/guards/can-go-to.guard";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {comments: CommentsResolver},
    canDeactivate: [CanLeaveGuard],
    canActivate: [CanGoToGuard],
    children: [
      {
        path: ':id', component: CommentDetailsComponent, resolve: {comment: CommentResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
