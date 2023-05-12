import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-deletedialogue',
  templateUrl: './deletedialogue.component.html',
  styleUrls: ['./deletedialogue.component.css']
})
export class DeletedialogueComponent {


  currentPassword!: string;

  constructor(
    private storageService: StorageServiceService,
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<DeletedialogueComponent>,
    private dialog : MatDialog
  ) { }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeletedialogueComponent, {
      width: '250px',
      data: { password: this.currentPassword }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}