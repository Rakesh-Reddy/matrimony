import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LOGO from './images/download.png'
class Header extends Component {

    render() {
        return (
            <div className="row col-md-12" style={{ backgroundColor: "#ff6200", height: "85px" }}>
                <div className="col-md-9 pt-1 pb-1">
                    <h2 className=" col-md-4 text-white">Matrimonial Site</h2>
                    <h2 className=" col-md-5 text-white" style={{ fontSize: "20px" }}>" - We knot you for the life time"</h2>
                </div>
                <div className="col-md-1 pt-3 pb-5">
                    <img className=" rounded  img-fluid" width="170" style={{ height: "60px" }} height="10" src={LOGO} alt="logo" />
                </div>
                <div className="col-md-1 pt-4">
                    <Link className="text-white" to="/registration">Register</Link>
                </div>
                <div className="col-md-1 pt-4 pb-5">
                    <Link to="/login" className="text-white">Login</Link>
                </div>
            </div>
        );
    }
}

export default Header;
