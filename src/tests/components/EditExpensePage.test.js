import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './../../components/EditExpensePage';
import expenses from './../fixtures/expenses';

let editExpense, removeExpense, history, wrapper; // undefined

beforeEach(() => { // spies
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[2]} 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
        />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]); // cannot refer to 'expense' directly!
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
    // wrapper.find('button').prop('onClick')(expenses[2].id); // no need
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

