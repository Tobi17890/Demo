import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Country } from '../Interface/country';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrl: './detail-country.component.scss'
})
export class DetailCountryComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(this.data);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
