import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total'; 


export const ExpensesSummary = props => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses'; 

    return (
        <div>
            <h1>Viewing {props.expenses.length} {expenseWord} totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    );
}; 
 
const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenses: visibleExpenses,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

// this alternative also works:
// export const ExpensesSummary = ({ expenseCount, expensesTotal }) => { // destructuring prop
//     const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
//     const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');

//     return (
//         <div>
//             <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
//         </div>
//     );
// }



