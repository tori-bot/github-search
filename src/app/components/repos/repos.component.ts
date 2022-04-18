
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { GetResultsService } from 'src/app/services/get-results.service';
import { User } from 'src/app/classes/user';
import { Repository } from 'src/app/classes/repository';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repository!: Repository;

  constructor(public getResultsService: GetResultsService) { }
  
  searchRepo(searchedUser:any) {
    this.getResultsService.getUserRepos(searchedUser)
      .then(
        (result) => {
          this.repository = this.getResultsService.repos;
          console.log(this.repository);
          
        }
    );
    this.repository = this.getResultsService.repos;
  console.log(this.repository);
   }

  ngOnInit(): void {
    this.searchRepo('tori-bot')
  }

}
