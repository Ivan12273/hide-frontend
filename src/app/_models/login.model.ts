import { ResolveStart } from '@angular/router';

/**
 * Clase
 */
export class Login {
  /**
   * Correo electronico
   */
  public email: string;
  /**
   * Contraseña
   */
  public password: string;

  /**
   * Constructor
   * @param email 
   * @param password 
   */
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
