import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  details: IPost

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.postsService
      .getPost(id).subscribe(value => this.details = value))
  }

}
