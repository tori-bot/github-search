import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) {
  }

  usersRequest(userName: any) {
    interface ApiResponse {
      name: string,
      login: string,
      avatar_url: string,
      bio: string,
      email: string,
      followers: number,
      following: number,
      created_at: Date,
      
    }

    
    return new Promise((resolve, reject) => {
      resolve(
        this.http.get<ApiResponse>(`${environment.apiUrl}/users/${userName}/repos??access_token=${environment.apiKey}`).toPromise())
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