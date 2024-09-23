import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CatalogProductsComponent } from '../../components/common/catalog-products/catalog-products.component';
import { ProductsSliderWrapperComponent } from '../../components/common/products-slider-wrapper/products-slider-wrapper.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import productsOBJ from './../../../data/products.json';
import { productsObjI } from '../../../interfaces/global-interfaces';
import { ModalComponent } from '../../components/common/modal/modal.component';
import { KeyValuePipe, NgIf } from '@angular/common';
import categoryProductObj from '../../../data/products.json';
@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [
    CatalogProductsComponent,
    ProductsSliderWrapperComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    NgIf,
    KeyValuePipe,
  ],
  templateUrl: './main-route.component.html',
  styleUrl: './main-route.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainRouteComponent implements OnInit, AfterViewInit {
  categoryProductObj: any = productsOBJ;
  nameCategory: string[] = Object.keys(productsOBJ);
  @ViewChild('life', { static: true }) lifeSwiper?: any;
  ngAfterViewInit() {
    console.log(this.lifeSwiper);
    // Object.assign(this.lifeSwiper.nativeElement, {
    //   clickable: true,
    //   pagination: {
    //     renderBullet: function (index: number, className: string) {
    //       return '<span class=""></span>';
    //     },
    //   },
    // });
  }

  ngOnInit() {
    console.log(this.categoryProductObj);
  }
}
