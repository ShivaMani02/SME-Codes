export function calculateTotalIncome(expenses) {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].type && expenses[i].type.toLowerCase() === 'income') {
            total += Number(expenses[i].amount) || 0;
        }
    }

    return total;
}

export function calculateTotalExpense(expenses) {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].type && expenses[i].type.toLowerCase() === 'expense') {
            total += Number(expenses[i].amount) || 0;
        }
    }

    return total;
}

export function calculateBalance(expenses) {
    const totalIncome = calculateTotalIncome(expenses);
    const totalExpense = calculateTotalExpense(expenses);
    return totalIncome - totalExpense;
}