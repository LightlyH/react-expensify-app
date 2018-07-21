import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total'; 


export const ExpensesSummary = props => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses'; 

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totaling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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



