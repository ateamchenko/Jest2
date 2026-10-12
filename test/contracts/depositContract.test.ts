import { DepositContract} from '../../src/contracts/depositContract'
import{ baseData, amount, interestRate} from '../__fixtures__/contracts'

let depositContract: DepositContract;
beforeEach(()=>{
  depositContract = new DepositContract(...baseData,amount,interestRate);
})
describe('Deposit fields check', () => {
  test('Deposit fields initialization', () => {
    expect(depositContract.amount).toBe(amount);
    expect(depositContract.interestRate).toBe(interestRate);
  })
})
describe('Deposit methods', () => {
  test('Deposit methods check', () => {
    expect(depositContract.calculateInterest()).toBe(amount * interestRate / 100);
  })
})