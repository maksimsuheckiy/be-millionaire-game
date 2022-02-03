import React from "react";
import {Route, Switch} from "react-router-dom";
import Routes from "./Routes";

const AppRouter = () => {
    return (
        <Switch>
            {Routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    children={<route.component/>}
                />
            ))}
        </Switch>
    )
}

export default AppRouter