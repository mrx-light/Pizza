import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './feedback.component.html',
  styleUrls: [
    './feedback.component.css',
    './../../layouts/account-info/account-info.component.css',
    './../career/career.component.css',
  ],
})
export class FeedbackComponent {}
