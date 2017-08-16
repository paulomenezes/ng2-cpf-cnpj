(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('cpf_cnpj')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', 'cpf_cnpj'], factory) :
	(factory((global['ng2-cpf-cnpj'] = {}),global._angular_core,global._angular_forms,global._angular_common,global.cpfCnpj));
}(this, (function (exports,_angular_core,_angular_forms,_angular_common,cpfCnpj) { 'use strict';

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
            var /** @type {?} */ cpf = cpfCnpj.CPF.isValid(this.cpf);
            var /** @type {?} */ valid = cpf ? null : { cpf: true };
            return valid;
        }
        else if (this.cnpj) {
            var /** @type {?} */ cnpj = cpfCnpj.CNPJ.isValid(this.cnpj);
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
    { type: _angular_core.Directive, args: [{
                selector: '[cpf],[cpf][ngModel],[cnpj],[cnpj][ngModel]',
                providers: [
                    {
                        multi: true,
                        provide: _angular_forms.NG_VALIDATORS,
                        useExisting: _angular_core.forwardRef(function () { return CpfCnpjDirective; })
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
CpfCnpjDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
CpfCnpjDirective.propDecorators = {
    'cpf': [{ type: _angular_core.Input },],
    'cnpj': [{ type: _angular_core.Input },],
};

var CpfCnpjModule = (function () {
    function CpfCnpjModule() {
    }
    return CpfCnpjModule;
}());
CpfCnpjModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _angular_forms.FormsModule],
                declarations: [CpfCnpjDirective],
                exports: [CpfCnpjDirective]
            },] },
];
/**
 * @nocollapse
 */
CpfCnpjModule.ctorParameters = function () { return []; };

exports.CpfCnpjModule = CpfCnpjModule;
exports.CpfCnpjDirective = CpfCnpjDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
