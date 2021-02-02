import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
/**
 * Componente para eliminar un producto
 */
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
  providers: [ProductService]
})
export class DeleteProductComponent implements OnInit {

  /**
   * Constructor
   * @param _productService 
   * @param _router 
   * @param data 
   */
  constructor(
    private _productService: ProductService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { productId: string }
  ) {
  }

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
  }

  /**
   * Envia solicitud de eliminación de producto
   * @param id 
   */
  deleteProduct(id: string) {
    this._productService.deleteProduct(id).subscribe(
      () => {
        
        location.reload();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
