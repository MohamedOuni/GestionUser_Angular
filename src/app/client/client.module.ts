import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GetMyProfileComponent } from './get-my-profile/get-my-profile.component';
import { UpdateMyProfilComponent } from './update-my-profil/update-my-profil.component';
import { DeletedialogueComponent } from './get-my-profile/deletedialogue/deletedialogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxPaginationModule } from 'ngx-pagination';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { WebcamDialogComponent } from './webcam-dialog/webcam-dialog.component';
import { WebcamModule } from 'ngx-webcam';
import { FullCalendarModule } from '@fullcalendar/angular';

import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ClientComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    GetMyProfileComponent,
    UpdateMyProfilComponent,
    DeletedialogueComponent,
    SigninComponent,

    ImageDialogComponent,
    WebcamDialogComponent,


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    NgxPaginationModule,
    MatDialogModule,
    WebcamModule,
    FullCalendarModule,
    NgxPaginationModule,
    EditorModule,
    FontAwesomeModule,
    FormsModule,
        MatButtonModule,
        MatStepperModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSnackBarModule

  ]
})
export class ClientModule { }
