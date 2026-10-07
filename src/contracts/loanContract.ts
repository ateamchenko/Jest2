import { BaseContract } from './baseContract'

export class LoanContract extends BaseContract{
  loanAmount: number; // size of loan in money
  monthlyPayment: number;
  loanTermMonths: number; // quantity of months to pay

  constructor(contractId: string, clientName: string, isActive: boolean, loanAmount: number,monthlyPayment: number, loanTermMonths: number) {
    super(contractId, clientName, isActive);
    this.loanAmount = loanAmount;
    this.monthlyPayment = monthlyPayment;
    this.loanTermMonths = loanTermMonths;
  }

  calculateTotalPayment(): number {
    return this.monthlyPayment * this.loanTermMonths;
  }
}