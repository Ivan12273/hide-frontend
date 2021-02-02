import { CurrencyPipe } from '@angular/common';

export class Product {
  public _id: string;
  public name: string;
  public description: string;
  public stock: number;
  public price: number;

  constructor(_id: string, name: string, description: string, stock: number, price: number){
    this._id = _id;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
  }
}
