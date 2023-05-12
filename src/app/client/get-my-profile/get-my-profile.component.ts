import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';
import { DeletedialogueComponent } from './deletedialogue/deletedialogue.component';



interface MyProfile {
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
}

@Component({
  selector: 'app-get-my-profile',
  templateUrl: './get-my-profile.component.html',
  styleUrls: ['./get-my-profile.component.css']
})
export class GetMyProfileComponent {
  userPhotoUrl!: string;
  isLoggedIn = false;
  isLoginFailed = false;
  user: MyProfile = {
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: ''
  };
  isLoading = true;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private storageService: StorageServiceService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  openDeleteDialog(): void {
    this.dialog.open(DeletedialogueComponent);
  }

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe(
      user => {
        this.user = user;
        this.isLoading = false;
        this.userService.getUserPhoto(user.email).subscribe(
          photo => {
            const blob = new Blob([photo], { type: 'image/jpeg' });
            this.userPhotoUrl = URL.createObjectURL(blob);
          },
          error => console.log(error)
        );
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  
}