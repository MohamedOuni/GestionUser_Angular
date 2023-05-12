import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { AllUserComponent } from './all-user/all-user.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatIconModule } from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    GetProfileComponent,
    DashboardComponent,
    AllUserComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgChartsModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  

  ]
})
export class AdminModule { }
