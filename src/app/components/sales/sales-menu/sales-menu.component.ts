import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';
import { SalesHistoryComponent } from '../sales-history/sales-history.component';

/**
 * Componente de menu de opciones para el modulo de ventas
 */
@Component({
  selector: 'app-sales-menu',
  templateUrl: './sales-menu.component.html',
  styleUrls: ['./sales-menu.component.css'],
  providers: [OrderService]
})
/**
 * Clase
 */
export class SalesMenuComponent implements OnInit {

  /**
   * Constructor
   * @param dialog 
   */
  constructor(
    public dialog: MatDialog,
  ) { }

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
  }

  /**
   * ...
   */
  openDialog(): void {
    this.dialog.open(SalesHistoryComponent);
  }

}
