import { calculateTotalIncome, calculateTotalExpense, calculateBalance } from './calculator.js';
import { saveExpenses, loadExpenses, deleteExpense } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const filterSelect = document.getElementById('expense-filter');
    const expenses = loadExpenses();

    updateSummaryCard(expenses);
    renderExpenses(expenses, filterSelect.value);

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('expense-name').value.trim();
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const type = document.getElementById('expense-type').value;
        const category = document.getElementById('expense-category').value;
        const date = document.getElementById('expense-date').value;

        if (!title || !amount || !type || !category || !date || Number.isNaN(amount)) {
            return;
        }

        const newExpense = {
            id: Date.now(),
            title,
            amount,
            type,
            category,
            date
        };

        const existingExpenses = loadExpenses();
        existingExpenses.push(newExpense);

        saveExpenses(existingExpenses);
        updateSummaryCard(existingExpenses);
        renderExpenses(existingExpenses, filterSelect.value);
        expenseForm.reset();
    });

    filterSelect.addEventListener('change', () => {
        renderExpenses(loadExpenses(), filterSelect.value);
    });
});

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR'
    }).format(value);
}

function updateSummaryCard(expenses) {
    const totalBalance = document.getElementById('total-balance');
    const totalIncome = document.getElementById('total-income');
    const totalExpenses = document.getElementById('total-expenses');

    const income = calculateTotalIncome(expenses);
    const expense = calculateTotalExpense(expenses);
    const balance = calculateBalance(expenses);

    totalIncome.textContent = formatCurrency(income);
    totalExpenses.textContent = formatCurrency(expense);
    totalBalance.textContent = formatCurrency(balance);
}

function renderExpenses(expenses, selectedFilter = 'All') {
    const expenseList = document.getElementById('expense-list');
    const filterSelect = document.getElementById('expense-filter');
    expenseList.innerHTML = '';

    const filteredExpenses = selectedFilter === 'All'
        ? expenses
        : expenses.filter((expense) => expense.type.toLowerCase() === selectedFilter.toLowerCase());

    if (!filteredExpenses.length) {
        const emptyState = document.createElement('li');
        emptyState.className = 'empty-state';
        emptyState.textContent = selectedFilter === 'All'
            ? 'No expenses added yet.'
            : `No ${selectedFilter.toLowerCase()} expenses found.`;
        expenseList.appendChild(emptyState);
        return;
    }

    filteredExpenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'expense-item';

        const itemInfo = document.createElement('div');
        itemInfo.className = 'expense-details';
        itemInfo.innerHTML = `
            <div class="expense-main">
                <span class="expense-title">${expense.title}</span>
                <span class="expense-type ${expense.type.toLowerCase()}">${expense.type}</span>
            </div>
            <div class="expense-meta">
                <span>${expense.category}</span>
                <span>${expense.date}</span>
            </div>
        `;

        const amount = document.createElement('span');
        amount.className = 'expense-amount';
        amount.textContent = formatCurrency(expense.amount);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            const actualIndex = expenses.findIndex((item) => item.id === expense.id);
            deleteExpense(actualIndex);
            const updatedExpenses = loadExpenses();
            updateSummaryCard(updatedExpenses);
            renderExpenses(updatedExpenses, filterSelect.value);
        });

        listItem.appendChild(itemInfo);
        listItem.appendChild(amount);
        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);
    });
}
