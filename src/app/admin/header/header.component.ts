import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  isLoggedIn = false;

  isLoggedIn2(): boolean {
    return this.storageService.isLoggedIn();
  }


  constructor(private httpclient: HttpClient,private adminservice:AdminService,private storageService: StorageServiceService, private authService: AuthServiceService,private route: Router) { }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
        this.route.navigate(["/client/signin"])
      },
      error: err => {
        console.log(err);
      }
    });
  }
}