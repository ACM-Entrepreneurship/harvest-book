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
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Calculator</a></li>
                    <li><Link href="/about">About</Link></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>
        </>
    )
}
}

export default Navbar;