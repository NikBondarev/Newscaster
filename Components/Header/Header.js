import React from "react";
import './Header.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header container">
            <h1>News<span style={{color:'blue'}}>caster</span></h1>
            <div className="header-nav">
                <NavLink to = '/' exact activeClassName="active-link">
                    Main Page
                </NavLink>
                <NavLink to = '/NewsPage' exact activeClassName="active-link">
                    News
                </NavLink>
                <NavLink to = '/Contacts' exact activeClassName="active-link">
                    Contacts
                </NavLink>
            </div>
        </div>
    )
}
export default Header;