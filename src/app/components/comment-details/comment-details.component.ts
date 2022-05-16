import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../interfaces/comments.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  details: IComment
  temp: any

  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {

  }

  ngOnInit(): void {
    this.details = history.state.data
    this.details = this.temp
    if (!this.details) {
      this.activatedRoute.params.subscribe(value => {
        this.commentsService.getSingleComment(value['id']).subscribe(response => {
          this.details = response
        })
      })
    }
  }

}
