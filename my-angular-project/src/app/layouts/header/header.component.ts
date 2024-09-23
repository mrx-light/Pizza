import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import category from './../../../data/category.json';
import services from './../../../data/services.json';
@Component({
  selector: 'app-header',
  standalone: true,

  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @Input() isStiky: string = 'sticky-top';
  cellphoneNum = signal<string>('Chisinau: 022 210-210');
  @ViewChild('ch', { static: true }) chisinau?: ElementRef<HTMLAnchorElement>;
  @ViewChild('bl', { static: true }) balti?: ElementRef<HTMLAnchorElement>;
  productsCart: WritableSignal<any> = signal<any>('Your cart is empty');
  categoryList = signal(category.categoryArray);
  servicesList = signal(services.servicesList);
  updateCellPhone(v: string) {
    if (v === 'ch') {
      this.cellphoneNum.set(this.chisinau!.nativeElement.innerText);
    }
    if (v === 'bl') {
      this.cellphoneNum.set(this.balti!.nativeElement.innerText);
    }
  }

  ngAfterViewInit() {}
}
