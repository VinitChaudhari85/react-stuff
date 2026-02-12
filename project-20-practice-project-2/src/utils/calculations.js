// src/utils/calculations.js

export function calculateDebts(expenses) {
  const debts = {};
  
  expenses.forEach((expense) => {
    const sharePerPerson = expense.amount / expense.participants.length;
    
    expense.participants.forEach((participantId) => {
      if (participantId !== expense.paidBy) {
        if (!debts[participantId]) {
          debts[participantId] = {};
        }
        
        if (!debts[participantId][expense.paidBy]) {
          debts[participantId][expense.paidBy] = 0;
        }
        
        debts[participantId][expense.paidBy] += sharePerPerson;
      }
    });
  });
  
  return debts;
}

// You can add more calculation functions here later
export function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function calculatePersonTotal(expenses, personId) {
  return expenses
    .filter(expense => expense.paidBy === personId)
    .reduce((total, expense) => total + expense.amount, 0);
}