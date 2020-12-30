import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfValidationDirective } from './cpf-validation/cpf-validation.directive';
import { InvalidNameDirective } from './invalid-name/invalid-name.directive';

@NgModule({
  declarations: [CpfValidationDirective, InvalidNameDirective],
  imports: [CommonModule],
  exports: [CpfValidationDirective, InvalidNameDirective],
})
export class ValidationModule {}
