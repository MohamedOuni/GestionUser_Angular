import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-update-my-profil',
  templateUrl: './update-my-profil.component.html',
  styleUrls: ['./update-my-profil.component.css']
})
export class UpdateMyProfilComponent {

  updatedUser = {
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: ''
  };password = '';
  


  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private userService: UserService,private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.updateUser(this.updatedUser, this.password)
      .subscribe(
        res=> (this.router.navigate(['/client/profile'])    )  );
  }

  }
