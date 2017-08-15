import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SampleModule } from '../../../src';
// import { SampleModule } from 'ng2-cpf-cnpj';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SampleModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
