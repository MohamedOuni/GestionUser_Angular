import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { WebcamDialogComponent } from '../webcam-dialog/webcam-dialog.component';
import { WebcamImage } from 'ngx-webcam';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
declare var window: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router,private dialog: MatDialog) { }



  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
   
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (this.roles.includes('ROLE_ETUDIANT')) {
          this.router.navigate(['/client/home']);
        }
        else if (this.roles.includes('ROLE_UNIVERSITE')) {
          this.router.navigate(['/client/home']);
        }
      }
      else {
        this.router.navigate(["/client/signin"]);
      }
    
  }

  
  

  onSubmit(): void {
    const { username, password} = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (this.roles.includes('ROLE_ETUDIANT')) {
          this.router.navigate(['/client/home']);
        }
        else if (this.roles.includes('ROLE_UNIVERSITE')) {
          this.router.navigate(['/client/home']);
        }
      }  
      ,
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

      }
    });



  }



  form: any = {
    nom: null,
    prenom: null,
    username: null,
    email: null,
    password: null,
    dateNaissance: null,
    roles: [] ,
    photo:null
  };
  roles: string[] = [];

  isSuccessful = false;
  isSignUpFailed = false;

  onSubmit1(): void {
    const { nom, prenom, username, email, password, dateNaissance, roles ,photo} = this.form;
  
    console.log('Form data before sending:', this.form); // Ajouté
  
    if (roles.length === 0) {
      this.errorMessage = 'Veuillez sélectionner au moins un rôle';
      this.isSignUpFailed = true;
      return;
    }
  
    this.authService
      .register(nom, prenom, username, email, password, dateNaissance, roles,photo)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/client/signin']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
  }

  isSignupChecked = true;

toggleRoleCheckboxes() {
  this.isSignupChecked = !this.isSignupChecked;
}
  onRoleChange(event: any): void {
    const role = event.target.value;
    console.log('Role change:', role, event.target.checked); // Ajouté
  
    if (event.target.checked) {
      this.form.roles.push(role);
    } else {
      this.form.roles = this.form.roles1.filter((r: string) => r !== role);
    }
    console.log('Roles after change:', this.form.roles); // Ajouté
  }


  onImageOptions(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed:', result);
      if (result === 'no-image') {
        this.form.photo = null;
      } else if (result === 'capture-image') {
        this.openWebcamDialog();
      }
    });
  }

  openWebcamDialog(): void {
    // Open a dialog to show the webcam and capture the image
    const dialogRef = this.dialog.open(WebcamDialogComponent);

    dialogRef.afterClosed().subscribe((webcamImage: WebcamImage) => {
      if (webcamImage) {
        this.form.photo = webcamImage.imageAsDataUrl;
      }
    });
  }

}