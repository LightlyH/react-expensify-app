import React from 'react'; // need JSX
import { shallow } from 'enzyme';
import { ExpenseList } from './../../components/ExpenseList';
import expenses from './../fixtures/expenses';
import { wrap } from 'module';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});