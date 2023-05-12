import { Component } from '@angular/core';
import { ForgotPasswordService } from 'src/app/core/service/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPassRequest = {
    email: '',
    resetpasswordcode: '',
    password: ''
  };

  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: ForgotPasswordService,private router: Router) { }

  onResetPassword() {
    this.userService.resetPassword(this.resetPassRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Mot de passe réinitialisé avec succès!';
        this.errorMessage = '';
        this.router.navigateByUrl('/client/signin')
      },
      error => {
        console.log(error);
        this.successMessage = '';
        this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
      }
    );
  }
}