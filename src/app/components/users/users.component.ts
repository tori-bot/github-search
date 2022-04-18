import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[]=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  // showUsers(searchQuery: any) {
  //   this.userService.usersRequest(userName).then((response:any) =>{
  //     console.log(response)
  //     this.users = response.data;
  //     // catching errors
  //   },(err:any) =>{
  //     alert('User not found')
  //   }
  //   )
  // }

}
