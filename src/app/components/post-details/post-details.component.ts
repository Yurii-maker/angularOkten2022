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

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const data = history.state.data
      if (data) {
        this.details = data
      } else {
        this.postService.getSinglePost(id).subscribe(value => {
          this.details = value
        })
      }
    })
  }

}
