import { AbstractControl, ValidatorFn } from '@angular/forms';
import CpfValidation from './cpf.validation';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpfValidation = new CpfValidation();

    const isInvalid = cpfValidation.isCpfInvalid(control.value);
    return isInvalid ? { cpfInvalid: true } : null;
  };
}
