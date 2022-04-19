import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any
  repositories: any = []
  
  getRepos() {
    this.userService.userRepos(this.user).then((response)=> {
      this.repositories=response
    }, err=>alert('Oops! Repo not found'))
  }


  ngOnInit(): void {
  }

}
