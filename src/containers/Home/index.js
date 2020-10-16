import React, { Component } from 'react'
import Template from "./components/Template";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage"
import { Switch, Route } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <Template>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </Template>
        )
    }
}
