import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: any
  moreDetails:any=[]

  constructor(private userService:UserService) { }

 

  showUsers() {
    this.userService.usersRequest(this.user).then((response: any) => {
      console.log(response)
      this.moreDetails = response.data;
      // catching errors
    }, err => {
      alert('User not found')
    })
  }
     ngOnInit(): void {
  }
    
  }


