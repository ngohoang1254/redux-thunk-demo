import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Template from "./components/Template";
import Movies from "./Movies";
import Users from "./Users";
export default class Admin extends Component {


    render() {
        const { match } = this.props;
        console.log(match);
        return (

            <Template>
                <Switch>
                    <Route path={`${match.path}/movies`} component={Movies} />
                    <Route path={`${match.path}/users`} component={Users} />
                </Switch>
            </Template>
        )
    }
}
