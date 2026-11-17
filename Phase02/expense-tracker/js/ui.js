import { calculateTotalIncome, calculateTotalExpense, calculateBalance } from './calculator.js';

const totalIncomeElement = document.getElementById('total-income');
const totalExpenseElement = document.getElementById('total-expense');
const balanceElement = document.getElementById('balance');

export function updateSummaryCard(expenses) {
    const totalIncome = calculateTotalIncome(expenses);
    const totalExpense = calculateTotalExpense(expenses);
    const balance = calculateBalance(expenses);

    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpenseElement.textContent = totalExpense.toFixed(2);
    balanceElement.textContent = balance.toFixed(2);
}
