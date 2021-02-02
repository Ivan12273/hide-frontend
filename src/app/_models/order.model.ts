import { Detail } from './detail.model';

export enum status {
    Nuevo = 'Nuevo',
    Preparacion = 'Preparación',
    Preparado = 'Preparado',
    Transito = 'Transito',
    Entregado = 'Entregado',
    Cancelado = 'Cancelado',
}
/**
 * Clase
 */
export class Order {
    public _id: string;
    public user_id: string;
    public client_id: ClientId;
    public status: status;
    public date: Date;
    public details: [Detail];
    public total_amount: number;
    public address: string;
    public phone: string;

    /**
     * Constructor
     * @param _id 
     * @param user_id 
     * @param client_id 
     * @param status 
     * @param date 
     * @param details 
     * @param address 
     * @param phone 
     */
    constructor(
        _id: string,
        user_id: string,
        client_id: ClientId,
        status: status,
        date: Date,
        details: [Detail],
        address: string,
        phone: string
    ) {
        this._id = _id;
        this.user_id = user_id;
        this.client_id = client_id;
        this.status = status;
        this.date = date;
        this.details = details;
        this.total_amount = this.getTotalAmount();
        this.address = address;
        this.phone = phone;
    }

   /**
    * Obtiebe el total de pedidos
    */
    public getTotalAmount(): number {
        let res = 0;

        this.details.forEach(element => {
            if (element.amount) {
                res += element.amount;

            }
        });

        return res;
    }

}
/**
 * Clase 
 */
class ClientId {
    _id: string;
    name: string;

    /**
     * Constructor
     * @param _id 
     * @param name 
     */
    constructor(_id: string, name: string) {
        this._id = _id;
        this.name = name;
    }
}