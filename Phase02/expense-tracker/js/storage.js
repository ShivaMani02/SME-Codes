const STORAGE_KEY = 'expense-tracker';

export function saveExpenses(expenses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

export function loadExpenses() {
    const storedExpenses = localStorage.getItem(STORAGE_KEY);
    return storedExpenses ? JSON.parse(storedExpenses) : [];
}

export function deleteExpense(index) {
    const expenses = loadExpenses();
    expenses.splice(index, 1);
    saveExpenses(expenses);
}