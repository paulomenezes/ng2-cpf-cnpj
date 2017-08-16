import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CpfCnpjDirective } from './cpf-cnpj.directive';

export * from './cpf-cnpj.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CpfCnpjDirective],
  exports: [CpfCnpjDirective]
})
export class CpfCnpjModule {}
