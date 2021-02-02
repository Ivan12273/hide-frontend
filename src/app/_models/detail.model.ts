// import { Location } from './location.model';

export class Detail {

    public product_id: ProductId;
    public quantity: number;
    public amount: number | undefined;

    constructor(_id: string, name: string, price: number, quantity: number) {
        this.product_id = new ProductId(_id, name, price);
        this.quantity = quantity;
        this.getAmount();
        // this.amount = price * quantity;
        // this.amount = this.getAmount(price, quantity);
    }

    public getAmount() {
        this.amount = this.product_id.price * this.quantity;
        return this.amount;
    }

}


class ProductId {

    _id: string;
    name: string;
    price: number;

    constructor(_id: string, name: string, price: number) {
        this._id = _id;
        this.name = name;
        this.price = price;
    }
}
