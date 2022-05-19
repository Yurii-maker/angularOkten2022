import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  details: IUser

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
    this.usersService.getUser(id).subscribe(value => this.details = value)
    )
  }

}
