import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appInvalidName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidNameDirective,
      multi: true,
    },
  ],
})
export class InvalidNameDirective implements Validator {
  @Input()
  appInvalidName: string;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.appInvalidName
      ? this.invalidNameValidator(new RegExp(this.appInvalidName, 'i'))(control)
      : null;
  }

  private invalidNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const invalid = nameRe.test(control.value);
      return invalid ? { invalidName: { value: control.value } } : null;
    };
  }
}


