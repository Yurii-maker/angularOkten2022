import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{

      path: 'posts', component: PostsComponent, children: [{
        path: ':id', component: PostDetailsComponent
      }

      ]
    },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':id', component: CommentDetailsComponent}
        ]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
