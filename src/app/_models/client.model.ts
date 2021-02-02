import { Location } from './location.model';

export class Client {
    public _id: string;
    public name: string;
    public phone: [String];
    public location: [Location];

    constructor(_id: string, name: string, phone: [String], location: [Location]) {
        this._id = _id;
        this.name = name;
        this.phone = phone;
        this.location = location;
    }

    addPhoneNumber(number: string) {
        this.phone.push(number);
    }

    deletePhoneNumber() {
        this.phone.pop();
    }

    addLocation(location: Location) {
        this.location.push(location);
    }

    deleteLocation() {
        this.location.pop();
    }

}