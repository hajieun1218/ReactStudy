import React,{Fragment} from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <Fragment>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to={"/"}>MovieCenter</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink exact to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/lookup"}>영화랭킹</NavLink></li>
                            <li><NavLink to={"/ratecur"}>현재상영영화</NavLink></li>
                            <li><NavLink to={"/rateall"}>모든영화</NavLink></li>
                            <li><NavLink to={"/news"}>뉴스검색</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="jumbotron text-center">
                {/*<h1>SIST 맛집</h1>*/}

            </div>
        </Fragment>
    )
}

export default Header;

