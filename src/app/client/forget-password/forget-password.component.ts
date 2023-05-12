import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/core/service/forgot-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email!: string;
  message!: string;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private router1: Router,private authService: ForgotPasswordService) {}

  ngOnInit(): void {
    
  }

  submit() {
    this.authService.forgotPassword(this.email).subscribe(
      (data) => {
        this.message = data.message;
        this.router1.navigate(['client/resetpassword']);

      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }
}