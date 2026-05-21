import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  initialInvestmentValue = signal('0');
  annualInvestmentValue = signal('0');
  expectedReturnValue = signal('5');
  durationValue = signal('10');

  private investmentService = inject(InvestmentService);

  onUserInput() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestmentValue(),
      annualInvestment: +this.annualInvestmentValue(),
      expectedReturn: +this.expectedReturnValue(),
      duration: +this.durationValue(),
    });

    this.initialInvestmentValue.set('0');
    this.annualInvestmentValue.set('0');
    this.expectedReturnValue.set('5');
    this.durationValue.set('10');
  }
}
