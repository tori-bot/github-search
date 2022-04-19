import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any
  moreDetails: any = []
  
  searchResult=true
  

  constructor(private userService:UserService) { }

 

  showUsers() {
    this.searchResult = false;
    this.userService.usersRequest(this.user).then((response: any) => {
      console.log(response)
      this.moreDetails = response;
      // catching errors
    }, err => {
      alert('User not found')
    })
  }
     ngOnInit(): void {
  }
    
  }


