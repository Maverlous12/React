import React , { Component } from 'react';


class Header extends Component {
  render (){
    return (
  
    <div class="container" >
      
    
    
    <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
            <li>
                <a>Home</a>
            </li>
            <li className="active"> 
                <a>Information</a>
            </li>
        </ul>
    </nav>
    </div>
    );
  }
}

export default Header;
