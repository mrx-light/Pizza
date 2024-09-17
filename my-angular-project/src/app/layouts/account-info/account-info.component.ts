import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
})
export class AccountInfoComponent {
  personalData = {
    name: 'Ion Grigorescu',
    email: 'igrigorescu@gmail.com',
    phone: '059921234',
    city: 'Chisinau',
  };
}
