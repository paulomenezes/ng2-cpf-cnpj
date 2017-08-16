import { Directive, ElementRef, Input, NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CNPJ, CPF } from 'cpf_cnpj';
import * as cpfCnpj from 'cpf_cnpj';

var CpfCnpjDirective = (function () {
    /**
     * @param {?} el
     */
    function CpfCnpjDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CpfCnpjDirective.prototype.ngOnChanges = function (changes) {
        if (this.onChange) {
            this.onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    CpfCnpjDirective.prototype.validate = function (c) {
        if (this.cpf) {
            var /** @type {?} */ cpf = CPF.isValid(this.cpf);
            var /** @type {?} */ valid = cpf ? null : { cpf: true };
            return valid;
        }
        else if (this.cnpj) {
            var /** @type {?} */ cnpj = CNPJ.isValid(this.cnpj);
            var /** @type {?} */ valid = cnpj ? null : { cnpj: true };
            return valid;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CpfCnpjDirective.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return CpfCnpjDirective;
}());
CpfCnpjDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cpf],[cpf][ngModel],[cnpj],[cnpj][ngModel]',
                providers: [
                    {
                        multi: true,
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(function () { return CpfCnpjDirective; })
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
CpfCnpjDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
CpfCnpjDirective.propDecorators = {
    'cpf': [{ type: Input },],
    'cnpj': [{ type: Input },],
};

var CpfCnpjModule = (function () {
    function CpfCnpjModule() {
    }
    return CpfCnpjModule;
}());
CpfCnpjModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [CpfCnpjDirective],
                exports: [CpfCnpjDirective]
            },] },
];
/**
 * @nocollapse
 */
CpfCnpjModule.ctorParameters = function () { return []; };

export { CpfCnpjModule, CpfCnpjDirective };
