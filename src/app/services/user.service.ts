import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', 0, 0, 0, new Date)
  }

  usersRequest(userName: any) {
    interface ApiResponse {
      name: string,
      bio: string,
      email: string,
      followers: number,
      following: number,
      created_at: Date,
      
    }

    
    return new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${environment.apiUrl}/users/${userName}/repos??access_token=${environment.apiKey}`).toPromise().then(response => {
        this.user.name = response.name;
        this.user.bio = response.bio;
        this.user.created_at = response.created_at;

        resolve(response)

      }, error => {
        this.user.name = ('Oops! Try again.')

        reject(error)
      })
    })
    
  }
}







  

  // searchUser(searchedUser: string) {
  //   interface UserApiResponse {
  //     login: '';
  //     name: '';
  //     bio: '';
  //     url: '';
  //     avatar_url: '';
  //     email: '';
  //     public_repos: number;
  //     following: number;
  //     followers: number;
  //     created_at: Date;
  //   }
    

  //   return new Promise((resolve) => {
  //     resolve(
  //       this.http.get<UserApiResponse>(environment.GitHubAPIUrl + searchedUser + '?access_token=' + environment.apiKey).toPromise())
  //   })
      
  //   // userRepos(searchedUser: string){
  //   //   interface Repos {
  //   //     name: string;
  //   //     html_url: string;
  //   //     description: string;
  //   //     language: string;
  //   //     created_at: Date;
  //   //     forks: number;
  //   //   }

  //   //   return new Promise((resolve) => {
  //   //     resolve(
  //   //       this.http.get<Repos>(environment.GitHubAPIUrl + searchedUser + '?access_token=' + environment.apiKey).toPromise())
  //   //   }) 


      
//      }
//   }
// }
    


    