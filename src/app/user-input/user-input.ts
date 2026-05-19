import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputData } from './user-input.module';
import { InvestmentResults } from '../investment-results/investment-results';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule, InvestmentResults],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  userInput = output<UserInputData>();
  initialInvestmentValue = signal('0');
  annualInvestmentValue = signal('0');
  expectedReturnValue = signal('5');
  durationValue = signal('10');

  onUserInput() {
    this.userInput.emit({
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
