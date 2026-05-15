import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() userInput = new EventEmitter<UserInputData>();
  initialInvestmentValue = '10000';
  annualInvestmentValue = '100';
  expectedReturnValue = '5';
  durationValue = '10';

  onUserInput() {
    this.userInput.emit({
      initialInvestment: Number(this.initialInvestmentValue),
      annualInvestment: Number(this.annualInvestmentValue),
      expectedReturn: Number(this.expectedReturnValue),
      duration: Number(this.durationValue),
    });
  }
}
