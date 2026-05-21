import { Injectable, signal } from '@angular/core';
import type { AnnualData, UserInputData } from './user-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  annualDataValue = signal<AnnualData[] | undefined>(undefined);

  calculateInvestmentResults(userInput: UserInputData) {
    const annualData = [];
    let investmentValue = userInput.initialInvestment;
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
    this.annualDataValue.set(annualData);
  }
}
