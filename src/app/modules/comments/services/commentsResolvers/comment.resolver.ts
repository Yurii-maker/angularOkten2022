import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from "../../interfaces";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {

  constructor(private commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {

    const {id} = route.params

    return this.commentsService.getComment(id);
  }

}
