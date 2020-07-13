import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  getUserDetails(userName: string) {
    return this.http.get(`${this.url}${userName}`);
  }

  getRepos(repourl: string) {
    return this.http.get(repourl);
  }
}
