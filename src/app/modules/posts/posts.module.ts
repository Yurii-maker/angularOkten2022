import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostsService} from "./services/posts.service";
import {PostResolver} from "./services/postsResolvers/post.resolver";
import {PostsResolver} from "./services/postsResolvers/posts.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    PostResolver,
    PostsResolver
  ]
})
export class PostsModule {
}
