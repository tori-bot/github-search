import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { GetResultsService } from 'src/app/services/get-results.service';
import { User } from 'src/app/classes/user';
import { Repository } from 'src/app/classes/repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  repository!: Repository;

  constructor(private userService: UserService, public getResultsService: GetResultsService) { }
  
  profileInfo(searchedUser:any) {
    this.userService.searchUser(searchedUser).then(
      (_success:any) => {
      this.user=this.userService.currentUser;
    },
      (error:any) => {
        console.log(error);
    
      });
  }

  ngOnInit(): void {
    this.profileInfo('tori-bot');
  }

}
