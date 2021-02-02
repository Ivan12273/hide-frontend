import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import { ProductService } from 'src/app/services/product.service';
import { Detail } from 'src/app/_models/detail.model';
import { Order } from 'src/app/_models/order.model';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-new-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
  providers: [ProductService]
})
export class ProductOrderComponent implements OnInit {
  public products: Product[] | undefined;
  public url: string;
  public order: Order | undefined;
  public detail: Detail | undefined;
  private _subscription_order: any;

  constructor(
    private _productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.url = Global.url;
    this.detail = new Detail('', '', 0, 0);

    this.detailForm = this.fb.group(
      {
        user_id: '',
        client_id: '',
        status: '',
        date: '',
        details: this.fb.array([]),
        address: '',
        phone: ''
      }
    );

    // this._subscription_order = this._orderService.execChange.subscribe((value) => {
    //   console.log(value + " jeje");

    //   this.order = value;
    // });

  }

  detailForm!: FormGroup;

  details(): FormArray {
    return this.detailForm.get("details") as FormArray
  }

  newDetail(): FormGroup {
    return this.fb.group(new Detail('', '', 0, 0));
  }

  addDetail() {
    this.details().push(this.newDetail());
  }

  removeDetail(i: number) {
    this.details().removeAt(i);
  }

  onSubmit() {
    let ord: Order = this.detailForm.value;

    localStorage.setItem('order', JSON.stringify(ord))
    this.router.navigate(['/sales/new-order/client']);
  }

  ngOnInit(): void {
    this.getProducts();
    this.addDetail();
  }

  storeDetails() {
    // console.log(`Orden hasta ahora: ${JSON.stringify(this.order)}`);
    // console.log("NEW FORM");
    // console.log(this.detailForm.value);
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      response => {
        if (response.products) {
          this.products = response.products;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
