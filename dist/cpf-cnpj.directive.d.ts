import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class CpfCnpjDirective implements Validator, OnChanges {
    private el;
    cpf: string;
    cnpj: string;
    private onChange;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange?(fn: () => void): void;
}
