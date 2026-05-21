import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

@NgModule({
  declarations: [App, Header, UserInput, InvestmentResults],
  imports: [FormsModule, BrowserModule],
  bootstrap: [App],
})
export class AppModule {}
