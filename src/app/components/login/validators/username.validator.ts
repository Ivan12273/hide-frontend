import { AbstractControl, ValidationErrors } from '@angular/forms';
/**
 * Clase
 */
export class UsernameValidator {
  /**
   * validación de emails
   * @param control 
   */
  static emailIsWrong(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      /**
       * regresa si el email es incorrecto 
       */
      return { emailIsWrong: true }
    }

    /**
     * ...
     */
    return null;
  }
}