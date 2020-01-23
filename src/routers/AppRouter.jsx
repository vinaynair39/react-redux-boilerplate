import React from 'react';
import { Router, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Index from "../pages/Index.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import Footer from "../variables/charts"
import LoginPage from '../pages/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path='/' component={Index} exact={true} />
        <PublicRoute path='/register' component={RegisterPage} exact={true} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <PrivateRoute path='/profile' component={LoginPage} exact={true} />
        <Redirect from="/" to="/components" />
      </Switch>
  </Router>
);

export default AppRouter;