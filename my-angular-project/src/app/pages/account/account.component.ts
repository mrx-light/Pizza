import { Component } from '@angular/core';
import { AccountHistoryComponent } from '../../layouts/account-history/account-history.component';
import { AccountPasswordComponent } from '../../layouts/account-password/account-password.component';
import { AccountInfoComponent } from '../../layouts/account-info/account-info.component';
import { AccountOrderComponent } from '../../layouts/account-order/account-order.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { CommonModule, NgSwitch } from '@angular/common';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { AccountAdressComponent } from '../../layouts/account-adress/account-adress.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    AccountHistoryComponent,
    HeaderComponent,
    FooterComponent,
    AccountPasswordComponent,
    AccountInfoComponent,
    AccountOrderComponent,
    AccountAdressComponent,
    CommonModule,
    NgSwitch,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  accountInfo = 'adress';
  title = 'Profile Page';
  password = 'asdsdsdsaddffsdf123';

  changeUIData(value: string, title: string) {
    this.accountInfo = value;
    this.title = title;
  }
  logOut(): string {
    return '';
  }

  passwordToAsterisk() {
    return '*'.repeat(this.password.length);
  }
}
