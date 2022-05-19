import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../../../constsans";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}
