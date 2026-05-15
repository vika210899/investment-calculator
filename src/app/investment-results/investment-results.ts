import { Component, Input } from '@angular/core';
import { type AnnualData } from '../user-input/user-input.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResults {
  @Input({ required: true }) annualData!: AnnualData[];
}
