import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-search-firebase-login';
  constructor(private auth: AuthService, private githubService: GithubService) {
    auth.getUser().subscribe(
      (user) => {
        console.log(user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
