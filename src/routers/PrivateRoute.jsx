import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Here what we do is we check if the user is authenticated. If not we redirect them to login page
export default ({
    component: Component,
    ...rest
}) => {
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
        <Route {...rest} component={(props) => (
            (false === true) ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/login" exact={true} />
                )
        )} />
    )
}
