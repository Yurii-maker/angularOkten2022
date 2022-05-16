import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../interfaces/post.interface";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  details: IPost
  temp: any

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {

  }

  ngOnInit(): void {
    this.details = history.state.data
    this.details = this.temp
    if (!this.details) {
      this.activatedRoute.params.subscribe(value => {
        this.postService.getSinglePost(value['id']).subscribe(response => {
          this.details = response
        })
      })
    }
  }

}
