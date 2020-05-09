import { Component, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LangComponent } from '../lang/lang.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() deviceXs: boolean;

  openlogin(): void {
    let dialogRef = this.dialog.open(LoginComponent, {

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  openlang(): void {
    let dialogRef = this.dialog.open(LangComponent, {

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  constructor(public dialog: MatDialog) { }

}
