import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);
  annualData = computed(() => this.investmentService.annualDataValue());
  function() {
    console.log('investment-results open');
  }
}
