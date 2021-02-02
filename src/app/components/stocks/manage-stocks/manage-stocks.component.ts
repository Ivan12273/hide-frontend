import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Global } from 'src/app/services/global';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { Router } from '@angular/router';
/**
 * Componente de administrar existencias
 */
@Component({
  selector: 'app-manage-stocks',
  templateUrl: './manage-stocks.component.html',
  styleUrls: ['./manage-stocks.component.css'],
  providers: [ProductService]
})
export class ManageStocksComponent implements OnInit {
  /**
   * Arreglo de productos
   */
  public products: Product[] | undefined;
  /**
   * url
   */
  public url: string;
  /**
   * Tipo de moneda
   */
  public currentCoin: string;
  /**
   * Tipo de cambio
   */
  public currentCoinValue: number;

  /**
   * Constructor
   * @param dialog 
   * @param _productService 
   * @param router 
   */
  constructor(
    public dialog: MatDialog,
    private _productService: ProductService,
    public router: Router
  ) {
    this.url = Global.url;
    this.currentCoin = Global.current_coin;
    this.currentCoinValue = Global.current_coin_value;
  }


  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Obtienen la lista de productos
   */
  getProducts() {
    this._productService.getProducts().subscribe(
      response => {
        if(response.products) {
          this.products = response.products;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  /**
   * Confirma si desea eliminar un producto
   * @param id id de producto
   */
  openDialog(id: string) {
    this.dialog.open(DeleteProductComponent, {
      data: { productId: id },
    });
  }

}
