//consts
//base contract
export const contractId = '1';
export const clientName = 'Sam';
export const isActive = false;
//deposit contract
export const amount = 1000;
export const interestRate = 12.4;
//insurance contract
export const insuranceType = 'car';
export const premium = 100;
export const termYears = 3;
//loan contract
export const loanAmount = 20;
export const monthlyPayment = 450;
export const loanTermMonths = 36;

//data
//base contract
export const baseData = [contractId,clientName,isActive] as const;

