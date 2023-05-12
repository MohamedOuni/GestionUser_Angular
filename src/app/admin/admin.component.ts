import { Component } from '@angular/core';
import { AuthServiceService } from '../core/service/auth-service.service';
import { StorageServiceService } from '../core/service/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  isAdmin = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router) { }

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

}


