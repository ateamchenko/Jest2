import { BaseContract } from "../../src/contracts/baseContract";
import {contractId,clientName,isActive } from '../__fixtures__/contracts'

// prerequisites for tests
let contract: BaseContract; // for usage in beforeEach

//pre-actions block
beforeEach(() => {
  contract = new BaseContract(contractId,clientName,isActive);
})
// tests themselves
describe('Fields check', ()=>{
  test('Fields initialization', ()=>{
    expect(contract.contractId).toEqual(contractId);
    expect(contract.clientName).toEqual(clientName);
    expect(contract.isActive).toBe(isActive);
  })
  test('Change fields values', ()=>{
    const newValues = {
      contractId: '2',
      clientName:'Frodo',
      isActive: true
    }
    Object.assign(contract, newValues);
    expect(contract).toMatchObject(newValues);
  })
})

describe('Methods check', ()=>{
  test('Activation check', ()=>{
    contract.isActive = false;
    contract.activate();
    expect(contract.isActive).toBeTruthy();
  })
  test('Deactivation check', () => {
    contract.isActive = true ;
    contract.deactivate();
    expect(contract.isActive).toBeFalsy();
  })
})
//post-actions
afterEach(() => {
  contract.isActive = false;
  console.log('Test passed');
})