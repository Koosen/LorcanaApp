import React from "react";

function NavBar(){
    return(
        <div className="NavBar">
            <img className="logo" src="../assets/logo.svg" alt="logo"></img>
            <nav>
                <ul className="NavLinks">
                    <li><a href="/#">Calender</a></li>
                    <li><a href="/#">Card Prices</a></li>
                    <li><a href="/#">About Me</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar