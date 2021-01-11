import { AbstractControl, ValidatorFn } from '@angular/forms';
import InvalidNameValidation from './invalid-name.validation';

export function invalidNameValidator(invalidValue: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalidName = new InvalidNameValidation();

    const isInvalid = invalidName.isInvalid(invalidValue, control.value);
    return isInvalid ? { invalidName: { value: control.value } } : null;
  };
}
