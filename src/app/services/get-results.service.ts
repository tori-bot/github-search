
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../classes/repository';
import { environment } from 'src/environments/environment';
import { resolve } from 'dns';
import { rejects } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class GetResultsService {
  repos: Repository;

  constructor(private http: HttpClient) {
    this.repos = new Repository('', '', '', '', 0, new Date);
  }
  
  getUserRepos(searchedUser: string) {
    interface Reposits{
      name: string;
      url: string;
      description: string;
      language: string;
      created: Date;
      forks: number;
    }
    return new Promise(resolve, reject)=>{
      this.http.get<Reposits>('https://api.github.com/users/' + searchedUser + "/repos?access_token=" + environment.apiKey').toPromise.then(
        (results)=> {
        this.repos = results;
        resolve();
      },
        (error) => {
          console.log("Oops! Something went wrong.");
          rejects();
        }
      );
    });
  }
}
