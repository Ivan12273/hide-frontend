import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
/**
 * Componente para crear nuevas ordenes
 */
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  providers: [ClientService, ProductService]
})
export class NewOrderComponent implements OnInit{

  /**
   * Constructor
   */
  constructor(){}

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {

  }

}
