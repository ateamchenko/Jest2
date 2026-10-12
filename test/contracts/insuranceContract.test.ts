import { InsuranceContract } from '../../src/contracts/insuranceContract'
import { baseData, insuranceType, premium,termYears } from '../__fixtures__/contracts'

let insuranceContract: InsuranceContract
beforeEach(() => {
  insuranceContract = new InsuranceContract(...baseData, insuranceType, premium, termYears);
})
describe('Insurance fields check', () => {
  test('Insurance fields initialization', () => {
    expect(insuranceContract.insuranceType).toBe(insuranceType);
    expect(insuranceContract.premium).toBe(premium);
    expect(insuranceContract.termYears).toBe(termYears);
  })
})
describe('Insurance methods', () => {
  test('Insurance methods check', () => {
    expect(insuranceContract.calculateTotalPremium()).toBe(premium * termYears);
  })
})
