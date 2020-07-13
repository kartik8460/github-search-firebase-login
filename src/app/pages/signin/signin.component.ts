import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(signInForm: NgForm) {
    const { email, password } = signInForm.form.value;
    this.auth
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('SignUp Success');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('SignIn Failed!');
      });
  }
}
