export class Location {
    public address: string;
    public addressDescription: string;
    public coordinates: string;

    constructor(address: string, addressDescription: string, coordinates: string){
        this.address = address;
        this.addressDescription = addressDescription;
        this.coordinates = coordinates;
    }
}