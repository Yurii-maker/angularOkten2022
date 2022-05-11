import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces/comments.interface";
import {CommentsService} from "../../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(response => this.comments = response)
  }

}
