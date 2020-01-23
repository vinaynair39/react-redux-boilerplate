import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Here what we do is we check if the user is authenticated.
// If the user is authenticated and he goes to login aur register page, user will be automatically be redirected to the dashboard

export default ({
    component: Component,
    ...rest
}) => {
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
        <Route {...rest} component={(props) => (
            false ? (
                <Redirect exact to="/dashboard" />
            ) : (
                    <Component {...props} />
                )
        )} />
    );
};