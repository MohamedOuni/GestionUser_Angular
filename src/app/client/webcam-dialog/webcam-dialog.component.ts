import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-webcam-dialog',
  templateUrl: './webcam-dialog.component.html',
  styleUrls: ['./webcam-dialog.component.css']
})
export class WebcamDialogComponent {
  private trigger: Subject<void> = new Subject<void>();

  constructor(public dialogRef: MatDialogRef<WebcamDialogComponent>) {}

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  onImageCapture(webcamImage: WebcamImage): void {
    this.dialogRef.close(webcamImage);
  }

  captureImage(): void {
    this.trigger.next();
  }
}