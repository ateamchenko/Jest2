import { LoanContract } from '../../src/contracts/loanContract'
import {
  baseData,
  loanAmount,
  monthlyPayment,
  loanTermMonths,
} from '../__fixtures__/contracts'

let loanContract: LoanContract
beforeEach(() => {
  loanContract = new LoanContract(
    ...baseData,
    loanAmount,
    monthlyPayment,
    loanTermMonths,
  )
})
describe('Loan fields check', () => {
  test('Loan fields initialization', () => {
    expect(loanContract.loanAmount).toBe(loanAmount);
    expect(loanContract.monthlyPayment).toBe(monthlyPayment);
    expect(loanContract.loanTermMonths).toBe(loanTermMonths);
  })
})
describe('Loan methods', () => {
  test('Loan methods check', () => {
    expect(loanContract.calculateTotalPayment()).toBe(monthlyPayment * loanTermMonths);
  })
})
