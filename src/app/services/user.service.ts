import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  searchUser(searchedUser: string) {
    interface UserApiResponse {
      login: '';
      name: '';
      bio: '';
      url: '';
      avatar_url: '';
      email: '';
      public_repos: number;
      following: number;
      followers: number;
      created_at: Date;
    }
    

    return new Promise((resolve) => {
      resolve(
        this.http.get<UserApiResponse>(environment.GitHubAPIUrl + searchedUser + '?access_token=' + environment.apiKey).toPromise())
    })
      
    // userRepos(searchedUser: string){
    //   interface Repos {
    //     name: string;
    //     html_url: string;
    //     description: string;
    //     language: string;
    //     created_at: Date;
    //     forks: number;
    //   }

    //   return new Promise((resolve) => {
    //     resolve(
    //       this.http.get<Repos>(environment.GitHubAPIUrl + searchedUser + '?access_token=' + environment.apiKey).toPromise())
    //   }) 


      
    // }
  }
}
    


    