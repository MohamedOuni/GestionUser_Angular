import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletedialogueComponent } from 'src/app/client/get-my-profile/deletedialogue/deletedialogue.component';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';

interface MyProfile {
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
}

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent {

  userPhotoUrl!: string;

  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private dialog: MatDialog,private userService: UserService,private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }


  user: MyProfile = {
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: ''
  };
  isLoading = true;



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
