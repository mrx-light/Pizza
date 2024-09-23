import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  model,
  Output,
  output,
  signal,
} from '@angular/core';
import { productsObjI } from '../../../../interfaces/global-interfaces';
import { ModalComponent } from '../modal/modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ModalComponent, NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardComponent {
  @Input() objProduct: productsObjI = {
    name: '',
    ingredients: '',
    weight: '',
    price: '',
    imageUrl: '',
  };
  isVisible = output<boolean>();
  productContent = output<productsObjI>();

  showModalApp() {
    this.isVisible.emit(true);
    this.productContent.emit(this.objProduct);
  }
}
