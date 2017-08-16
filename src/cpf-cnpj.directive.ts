import { Directive, ElementRef, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import * as cpfCnpj from 'cpf_cnpj';

@Directive({
  selector: '[cpf],[cpf][ngModel],[cnpj],[cnpj][ngModel]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CpfCnpjDirective)
    }
  ]
})
export class CpfCnpjDirective implements Validator, OnChanges {
  @Input() cpf: string;
  @Input() cnpj: string;

  private onChange: () => void;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.onChange) {
      this.onChange();
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    if (this.cpf) {
      const cpf = cpfCnpj.CPF.isValid(this.cpf);
      const valid = cpf ? null : { cpf: true };
      return valid;
    } else if (this.cnpj) {
      const cnpj = cpfCnpj.CNPJ.isValid(this.cnpj);
      const valid = cnpj ? null : { cnpj: true };
      return valid;
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onChange = fn;
  }
}
