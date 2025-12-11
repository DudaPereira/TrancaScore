import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

export interface DialogData {
  title?: string;
  message?: string;
  type: 'error' | 'warning' | 'success';
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, CommonModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
    constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
