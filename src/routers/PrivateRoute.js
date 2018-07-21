import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest   // rest operator
}) => (  
    <Route {...rest} component={props => (
        isAuthenticated ? ( // render the component
            <div> 
                <Header />
                <Component {...props} /> 
            </div>
        ) : (
            <Redirect to="/" /> // redirect to login page 
        )
    )} />
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);