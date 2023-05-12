import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>) { }

  onNoImage(): void {
    this.dialogRef.close('no-image');
  }

  onCaptureImage(): void {
    this.dialogRef.close('capture-image');
  }
}