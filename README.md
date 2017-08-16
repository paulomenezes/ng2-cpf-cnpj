# ng2-cpf-cnpj

Angular directive to validate CPF/CNPJ numbers, using [cpf_cnpj.js](https://github.com/fnando/cpf_cnpj.js).

## How to install

To install this library, run:

```bash
$ npm install ng2-cpf-cnpj --save
```

## How to use

```bash
$ npm install ng2-cpf-cnpj
```

and add to your `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CpfCnpjModule } from 'ng2-cpf-cnpj';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CpfCnpjModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Just add [cpf] or [cnpj] in your inputs:

```xml
<input type="text" name="cpf" [(ngModel)]="cpf" [cpf]="cpf"/>
<input type="text" name="cnpj" [(ngModel)]="cnpj" [cnpj]="cnpj" />
```  

You can use reference to detect the error type:

```xml
<input type="text" name="cpf" [(ngModel)]="cpf" [cpf]="cpf" #cpfInput="ngModel" required />
<div *ngIf="cpfInput?.errors?.cpf">CPF Invalid</div>
<div *ngIf="cpfInput?.errors?.required">CPF Required</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Paulo Menezes](mailto:paulo.hgmenezes@gmail.com)
