import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from './../fixtures/expenses';

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSumary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// this alternative also works
// test('should correctly render ExpensesSummary with one expense', () => {
//     const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={245} />);
//     expect(wrapper).toMatchSnapshot();
// });

// test('should correctly render ExpensesSumary with multiple expenses', () => {
//     const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={24500}/>);
//     expect(wrapper).toMatchSnapshot();
// });