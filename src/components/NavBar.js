import React from "react";

function NavBar(){
    return(
        <header className="NavBar">
            <a className="logo" href="/LorcanaApp">The <span className="logospan">Ink</span> Pot</a>
            <nav>
                <ul className="NavLinks">
                    <li><a href="/LorcanaApp">Card Prices</a></li>
                    <li><a href="/LorcanaApp">Spoilers</a></li>
                    <li><a href="/LorcanaApp">Calender</a></li>
                    <li><a href="/LorcanaApp">About Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar