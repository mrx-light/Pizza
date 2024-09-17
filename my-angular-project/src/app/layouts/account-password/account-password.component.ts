import { Component } from '@angular/core';

@Component({
  selector: 'app-account-password',
  standalone: true,
  imports: [],
  templateUrl: './account-password.component.html',
  styleUrls: [
    './account-password.component.css',
    './../account-info/account-info.component.css',
  ],
})
export class AccountPasswordComponent {
  password = 'asdsdsds';
}
