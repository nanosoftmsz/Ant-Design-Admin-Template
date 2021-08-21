import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import DemoPage from '../pages/DemoPage';
import Login from '../pages/Login';
import AdminLayout from './AdminLayout';
import LoggedInRoute from './ProtectedRoute/LoggedInRoute';

function CommonLayout() {
    return (
        <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset-passwords" component={DemoPage} />
            <LoggedInRoute component={AdminLayout} />
        </Switch>
    )
}

export default CommonLayout
