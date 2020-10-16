import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Sidebar extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <div>
                    <Link to = "/admin/users">Users</Link>
                </div>
                <div>
                    <Link to = "/admin/movies">Movies</Link>
                </div>
            </div>
        )
    }
}
