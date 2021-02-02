import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-qrproductinfo',
  templateUrl: './qrproductinfo.component.html',
  styleUrls: ['./qrproductinfo.component.css'],
  providers: [ProductService],
})
export class QrproductinfoComponent implements OnInit {
  public product!: Product;
  public url!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProduct(id);
    });
  }

  getProduct(id: string): void {
    this._productService.getProduct(id).subscribe(
      response => {
        this.product = response.product;
      },
      error => {
        console.log(error);
      }
    )
  }

}
