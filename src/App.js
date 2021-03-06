import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import NotFoundLayout from "./components/NotFoundLayout/NotFoundLayout";
import SignInLayout from "./components/AccountLayout/SignInLayout";
import RegisterLayout from "./components/AccountLayout/RegisterLayout";
import ResetPasswordLayout from "./components/AccountLayout/ResetPasswordLayout";
import ForgotPasswordLayout from "./components/AccountLayout/ForgotPasswordLayout";
import SetupLayout from "./components/SetupLayout/SetupLayout";
import MainLayout from "./components/MainLayout/MainLayout";
import UsersLayout from "./components/MainLayout/Users/UsersLayout";
import SettingsLayout from "./components/MainLayout/Settings/SettingsLayout";
import CurrentPollsLayout from "./components/MainLayout/Polls/CurrentPollsLayout/CurrentPollsLayout";
import PolicyLayout from "./components/MainLayout/Policies/PolicyLayout";
import PolicyDiffLayout from "./components/MainLayout/Policies/PolicyDiffLayout";
import LandingPage from "./components/LandingPage/LandingPage";
import ConfirmEmailLayout from "./components/AccountLayout/ConfirmEmailLayout";
import PolicyPublicLayout from "./components/MainLayout/Policies/PolicyPublicLayout";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={MainLayout} />
        <Route exact path="/login" component={SignInLayout} />
        <Route exact path="/signup" component={RegisterLayout} />
        <Route exact path="/confirm-email" component={ConfirmEmailLayout} />
        <Route exact path="/forgot-password" component={ForgotPasswordLayout} />
        <Route exact path="/reset-password" component={ResetPasswordLayout} />
        <PrivateRoute exact path="/setup" component={SetupLayout} />
        <PrivateRoute exact path="/users" component={UsersLayout} />
        <PrivateRoute exact path="/settings" component={SettingsLayout} />
        <PrivateRoute exact path="/polls" component={CurrentPollsLayout} />
        <PrivateRoute
          exact
          path="/policy/diff/:id"
          component={PolicyDiffLayout}
        />
        <PrivateRoute exact path="/policy" component={PolicyLayout} />
        <Route exact path="/yonetmelik" component={PolicyPublicLayout} />

        <Route component={NotFoundLayout} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
