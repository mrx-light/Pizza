import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-account-history',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './account-history.component.html',
  styleUrl: './account-history.component.css',
})
export class AccountHistoryComponent {}
