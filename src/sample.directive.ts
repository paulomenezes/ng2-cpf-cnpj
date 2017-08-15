import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  forwardRef
} from '@angular/core';
import * as cpfCnpj from 'cpf_cnpj';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[cpf],[cnpj]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SampleDirective)
    }
  ]
})
export class SampleDirective implements Validator {
  @Input() cpf: string;
  @Input() cnpj: string;

  constructor(private el: ElementRef) {}

  validate(c: AbstractControl): { [key: string]: any } {
    if (this.cpf) {
      const cpf = cpfCnpj.CPF.isValid(this.cpf);
      const valid = cpf ? null : { cpf: true };
      console.log('cpf', valid);
      return valid;
    } else if (this.cnpj) {
      const cnpj = cpfCnpj.CNPJ.isValid(this.cnpj);
      const valid = cnpj ? null : { cnpj: true };
      console.log('cnpj', valid);
      return valid;
    }
  }

  registerOnValidatorChange?(fn: () => void): void {}
}
