
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../classes/repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetResultsService {
  // repos: Repository;

  constructor(private http: HttpClient) {
    // this.repos = new Repository('', '', '', '', new Date,0);
  }
  
  getUserRepos(searchedUser: string) {
    interface Reposits {
      name: string;
      url: string;
      description: string;
      language: string;
      created: Date;
      forks: number;
    }
    return this.http.get<Reposits>('https://api.github.com/users/' + searchedUser + "/repos?access_token=" + environment.apiKey)
  }

  //   return new Promise((resolve,reject)=>{
  //     this.http.get<Reposits>('https://api.github.com/users/' + searchedUser + "/repos?access_token=" + environment.apiKey).toPromise().then(
  //       (results)=> {
  //       this.repos = results;
  //       resolve(results);
  //     },
  //       (error) => {
  //         console.log("Oops! Something went wrong.");
  //         reject(error);
  //       }
  //     );
  //   });
  // }
}
