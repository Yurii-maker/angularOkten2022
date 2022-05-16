import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces/post.interface";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getSinglePost(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.url}/${id}`)
  }
}
