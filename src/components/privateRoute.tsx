import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  let redirectPath = "";
  if (!props.isAuthenticated) {
    redirectPath = props.authenticationPath;
  }
  if (props.isAuthenticated && !props.isAllowed) {
    redirectPath = props.restrictedPath;
  } 

  if (redirectPath) {
    const renderComponent = () => (
      <Redirect to={{ pathname: redirectPath, state: { from: props.location } }} />
    );
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default PrivateRoute;
