import React, { Component } from 'react'
import Header from "../Headers";
export default class index extends Component {
    render() {
        return (
          <>
            <Header/>
            {this.props.children}
          </>
        )
    }
}
