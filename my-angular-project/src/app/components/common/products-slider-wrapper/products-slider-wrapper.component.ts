import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CatalogProductsComponent } from '../catalog-products/catalog-products.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-slider-wrapper',
  standalone: true,
  imports: [CatalogProductsComponent, ProductCardComponent],
  templateUrl: './products-slider-wrapper.component.html',
  styleUrl: './products-slider-wrapper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsSliderWrapperComponent {}
