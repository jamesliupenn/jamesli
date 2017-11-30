import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
  title = 'jamesli';

  constructor(public dialog: MatDialog){ }

  ngOnInit(): void {
  }

  openDialog(): void {
  	let dialogRef = this.dialog.open(DialogDataComponent, {
  		height: '400px',
  		width: '600px'
  	});
  	dialogRef.afterClosed().subscribe(result => {
  		console.log(`Dialog closed: ${result}`);
  	})
  }
}

@Component({
	selector: 'dialog-data',
	templateUrl: 'dialog-data.html'
})

export class DialogDataComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}