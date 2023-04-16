import { Component } from "react";
import Link from "next/link"
//import "./navbar.css";

class Navbar extends Component {
    state={clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
          <nav>
            <a href="/"><img src="images/harvest_book_logo.png" id="acme-logo-r" alt="HarvestBook Logo"/></a>

            <div>
                <ul id="navbar-custom" className={this.state.clicked ? "#navbar-custom active" : "#navbar-custom"}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/calculator">Calculator</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'}></i>
            </div>
          </nav>
        </>
    )
}
}

export default Navbar;