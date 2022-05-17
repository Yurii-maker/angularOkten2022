import {Component, OnInit} from '@angular/core';
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


  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const data = history.state.data
      if (data) {
        this.details = data
      } else {
        this.commentsService.getSingleComment(id).subscribe(value => {
          this.details = value
        })
      }
    })
  }

}
