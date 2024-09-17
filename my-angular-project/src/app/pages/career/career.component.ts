import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, NgSwitch],
  styleUrls: ['./career.component.css', './../account/account.component.css'],
  templateUrl: './career.component.html',
})
export class CareerComponent {
  tabsValue = 'restaurantsJobs';

  tabJobsChange(val: string) {
    this.tabsValue = val;
    console.log(this.tabsValue);
  }
}
