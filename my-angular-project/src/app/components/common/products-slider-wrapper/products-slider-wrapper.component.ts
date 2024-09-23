import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
  viewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CatalogProductsComponent } from '../catalog-products/catalog-products.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { productsObjI } from '../../../../interfaces/global-interfaces';
import { ModalComponent } from '../modal/modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products-slider-wrapper',
  standalone: true,
  imports: [
    CatalogProductsComponent,
    ProductCardComponent,
    ModalComponent,
    NgIf,
  ],
  templateUrl: './products-slider-wrapper.component.html',
  styleUrl: './products-slider-wrapper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsSliderWrapperComponent implements AfterViewInit {
  @Input() objProducts: any = [
    {
      name: '',
      ingredients: '',
      weight: '',
      price: '',
      imageUrl: '',
    },
  ];
  @Input()
  categoryName: any = '';

  replaceCaracter() {
    this.categoryName = this.categoryName.replace(/_/g, ' ');

    return (
      this.categoryName.charAt(0).toUpperCase() + this.categoryName.slice(1)
    );
  }

  @ViewChild('swiper', { static: true }) swiper?: any;
  show: boolean = false;
  product: productsObjI = {
    name: '',
    ingredients: '',
    weight: '',
    price: '',
    imageUrl: '',
  };
  showModal(event: boolean) {
    this.show = event;
    console.log('IS Visible: ', event);
  }
  passObject(prod: productsObjI) {
    this.product = prod;
  }
  closeModal() {}
  @ViewChildren('modal', { read: ElementRef }) modalTemplate?: any;
  comp: any;

  closeModalApp(event: boolean) {
    this.show = event;
    console.log('Close:', event);
  }

  getCode() {}
  ngAfterViewInit() {
    Object.assign(this.swiper.nativeElement, {
      spaceBetween: 1,
      slidesPerView: 5,
    });
    // this.swiper.initialize();
    console.log(this.modalTemplate.nativeElement, 'asdsjdbhgdvs');
    if (this.modalTemplate) {
      this.modalTemplate.changes.subscribe(
        (comps: QueryList<ModalComponent>) => {
          this.comp = comps.first;
          console.log('Changes: ');
          if (comps.first) {
            if (this.show) {
              console.log('Modal: ', this.modalTemplate);

              window.onclick = (event) => {
                if (
                  event.target ==
                  this.modalTemplate.first.nativeElement.querySelector(
                    '.modal-shady',
                  )
                ) {
                  this.show = false;
                }
              };
            }
          }
        },
      );
    }
  }
}
