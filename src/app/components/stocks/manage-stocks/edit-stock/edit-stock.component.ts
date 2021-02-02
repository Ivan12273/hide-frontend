import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Global } from 'src/app/services/global';
import { Product } from 'src/app/_models/product.model';
import { FormControl, Validators } from '@angular/forms';
/**
 * Componente pata Editar la existencia de un producto
 */
@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css'],
  providers: [ProductService]
})
export class EditStockComponent implements OnInit {
  /**
   * Producto a editar
   */
  public product!: Product;
  /**
   * url
   */
  public url: string;
  /**
   * Documentation coverage
   */
  public urlFront: string;
  

  /**
   * Constructor
   * @param _productService 
   * @param _route 
   * @param _router 
   */
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.url = Global.url;
    this.urlFront = Global.urlFront;
  }


  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProducts(id);
    });
  }

  /**
   * Obtiene el producto a modificar
   * @param id 
   */
  getProducts(id: string): void {
    this._productService.getProduct(id).subscribe(
      response => {
        this.product = response.product;
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
   * Envía peticion para actualizar el producto
   * @param form 
   */
  onSubmit(form: any): void {
    // let product = new Product('', this.name.value, this.description.value, this.stock.value, this.price.value);

    this._productService.updateProduct(this.product).subscribe(
      response => {
        if (response.product) {
          this._router.navigate(['/stocks/manage-stocks']);
        } else {

        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
