// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // ES6 spread operator
                action.expense
            ];
            // return state.concat(action.expense); // also works
        case 'REMOVE_EXPENSE':
            // return state.filter(expense => expense.id !== action.id); // also works
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses; // don't care about previous expenses 
        
        default:
            return state;
    }
};