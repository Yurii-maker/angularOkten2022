import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"

import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  details: IComment

  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.commentsService
      .getComment(id).subscribe(details => this.details = details))
  }

}
