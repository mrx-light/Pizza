import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
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
import { GetUsersServices } from '../../services/get-users.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  providers: [],
})
export class MainRouteComponent implements OnInit, AfterViewInit {
  constructor() {}
  users: GetUsersServices = inject(GetUsersServices);
  categoryProductObj: any = productsOBJ;
  nameCategory: string[] = Object.keys(productsOBJ);
  @ViewChild('life', { static: true }) lifeSwiper?: any;
  ngAfterViewInit() {
    console.log(this.lifeSwiper);
  }

  ngOnInit() {
    console.log(this.categoryProductObj);

    // this.users.getPosts().subscribe((el) => {
    //   console.log('Obiect: ', el);
    // });
    //
    // this.users.getPostByID(1).subscribe((el) => {
    //   console.log('This', el);
    // });
    //
    // this.users
    //   .createPost({ id: '3', title: 'asdjsbdvs', views: 'ashdbdvsgd' })
    //   .subscribe((el) => {
    //     console.log(el);
    //   });
    this.users.deletePost(2).subscribe((el) => {
      console.log('Deleted: ', el);
    });
  }
}
