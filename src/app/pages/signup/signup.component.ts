import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(signUpForm: NgForm) {
    const { email, password } = signUpForm.form.value;
    this.auth
      .signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('SignUp Success');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('SignUp Failed!');
      });
  }
}
