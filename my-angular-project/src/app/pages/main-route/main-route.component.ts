import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CatalogProductsComponent } from '../../components/common/catalog-products/catalog-products.component';
import { ProductsSliderWrapperComponent } from '../../components/common/products-slider-wrapper/products-slider-wrapper.component';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [
    CatalogProductsComponent,
    ProductsSliderWrapperComponent,
    HeaderComponent,
  ],
  templateUrl: './main-route.component.html',
  styleUrl: './main-route.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainRouteComponent {}
