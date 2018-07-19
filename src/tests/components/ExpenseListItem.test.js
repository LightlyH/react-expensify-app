import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './../../components/ExpenseListItem';
import expenses from './../fixtures/expenses';
import { wrap } from 'module';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>); // can get correct data
    // const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />); // cannot get data: ExpenseListItem requires several props instead of an expense prop
    expect(wrapper).toMatchSnapshot(); 
});