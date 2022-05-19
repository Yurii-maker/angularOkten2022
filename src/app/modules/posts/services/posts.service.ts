import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../../../constsans";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getPost(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
