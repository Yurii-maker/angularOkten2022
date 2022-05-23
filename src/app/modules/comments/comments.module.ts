import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentsService} from "./services/comments.service";
import {CommentsResolver} from "./services/commentsResolvers/comments.resolver";
import {CommentResolver} from "./services/commentsResolvers/comment.resolver";



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService,
    CommentsResolver,
    CommentResolver
  ]
})
export class CommentsModule { }
