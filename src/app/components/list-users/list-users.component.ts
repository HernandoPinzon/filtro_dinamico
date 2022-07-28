import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() users: Array<User> = [];

  
  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.users)
  }

}
