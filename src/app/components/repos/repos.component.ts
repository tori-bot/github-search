
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
  repositories:any[]= [];

  constructor(public getResultsService: GetResultsService) { }

  ngOnInit(): void {
    // this.searchRepo('tori-bot')
  }
  
  searchRepo(searchedUser: any) {
    this.getResultsService.getUserRepos(searchedUser).subscribe((response: any) => {
      console.log(response);
      this.repositories = response.data;
      
    },
      error => {
        alert('Oops! Not found.')
      })
  }
    //     .then(
    //       (result) => {
    //         this.repository = this.getResultsService.repos;
    //         console.log(this.repository);
          
    //       }
    //   );
    //   this.repository = this.getResultsService.repos;
    // console.log(this.repository);
    //  }

    // ngOnInit(): void {
    //   // this.searchRepo('tori-bot')
  // }
}
