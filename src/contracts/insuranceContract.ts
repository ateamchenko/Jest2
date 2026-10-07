import { BaseContract } from './baseContract'

export class InsuranceContract extends BaseContract {
  insuranceType: string;
  premium: number;
  termYears: number;

  constructor(contractId: string, clientName: string, isActive: boolean, insuranceType: string, premiun: number, termYears: number) {
    super(contractId, clientName, isActive);
    this.insuranceType = insuranceType;
    this.premium = premiun;
    this.termYears = termYears;
  }

  calculateTotalPremium(): number {
    return this.premium * this.termYears;
  }
}