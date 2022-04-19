import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) {
  }

  usersRequest(username: any) {
    interface ApiResponse {
      name:string,
      login: string,
      avatar_url: string,
      bio: string,
      email: any,
      followers: number,
      following: number,
      created_at: Date,
      
    }

    
    return new Promise((resolve, reject) => {
      resolve(
        this.http.get<ApiResponse>(`https://api.github.com/users/${username}??access_token=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`).toPromise())
    })
  }

  userRepos(userName: any) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date;
      forks: number;
    }

    
    return new Promise((resolve, reject) => {
      resolve(
        this.http.get<Repos>(`${environment.apiUrl}/users/${userName}/repos??access_token=${environment.apiKey}`).toPromise())
    })
  }

}