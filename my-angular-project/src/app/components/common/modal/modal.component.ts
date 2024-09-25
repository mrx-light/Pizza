import { Component, Input, input, OnInit, output, Output } from '@angular/core';
import { productsObjI } from '../../../../interfaces/global-interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input() product: productsObjI = {
    name: '',
    ingredients: '',
    weight: '',
    price: '',
    imageUrl: '',
  };

  @Input() show: boolean | string = '';
  close = output<boolean>();

  closeModal() {
    if (this.show) {
      this.close.emit(false);
    }
  }

  ngOnInit() {}
}
