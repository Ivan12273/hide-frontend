import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
/**
 * Componente del registro de productos
 */
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  providers: [ProductService]
})
export class RegisterProductComponent implements OnInit {
  /**
   * nombre del producto
   */
  name = new FormControl('', [Validators.required]);
  /** 
   * Descripcion del producto 
   * */
  description = new FormControl('');
  /**
   * Cantidad disponible de producto
   */
  stock = new FormControl('', [Validators.min(0)]);
  /**
   * Precio actual del producto
   */
  price = new FormControl('', [Validators.required, Validators.min(0)]);

  /**
   * Constructor 
   * @param _productService 
   * @param _router 
   */
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
  }

  /**
   * Error cuando el campo de nombre está vacío
   */
  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Debes ingresar un nombre.' : '';
  }

  /**
   * Error al tratar de ingresar numeros negativos en las existencias
   */
  getStockErrorMessage() {
    return 'El stock mínimo es de 0 unidades';
  }

  /**
   * Error al tratar de ingresar numeros negativos en el precio de productos
   */
  getPriceErrorMessage() {
    if (this.price.hasError('min'))
      return 'El precio mínimo es de $0'

    return this.price.hasError('required') ? 'Debes ingresar un precio' : '';
  }

  /**
   * función que inicializa el componente
   */
  ngOnInit(): void {
  }

  /**
   * Solicitud de guardado
   * @param form datos del formulario
   */
  onSubmit(form: any) {
    let product = new Product('', this.name.value, this.description.value, this.stock.value, this.price.value);
    this._productService.saveProduct(product).subscribe(
      response => {
        if (response.product)
          this._router.navigate(['/stocks']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
