import React from "react";
import {NavLink} from "react-router-dom";  // a태그 대신 NavLink 사용

export default function Header(props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to={"/"}>Recipe</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink exact to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/recipe"}>레시피</NavLink></li>
                    <li><NavLink to={"/chef"}>셰프</NavLink></li>
                    <li><NavLink to={"/recommend"}>추천</NavLink></li>
                    <li><NavLink to={"/news"}>뉴스</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}