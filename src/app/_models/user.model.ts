export class User {
  public _id: string;
  public name: string;
  public birthday: string;
  public email: string;
  public role: string;

  constructor(_id: string, name: string, birthday: string, email: string, role: string){
    this._id = _id;
    this.name = name;
    this.birthday = birthday;
    this.email = email;
    this.role = role;
  }
}
