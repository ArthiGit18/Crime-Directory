import React from 'react'

const Navbar = ({ isBlack }) => {
    return (
      <div className={`navbar_wrapper ${isBlack ? 'black' : ''}`}>
  
            <div className='nav_logo'>
                <h1>Crime Chronicles</h1>
            </div>
            <div className='nav_items'>
                <ul class="navbar">
                    <li class="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="/">Criminal Records</a>
                        <ul class="dropdown-menu">
                            <li><a href="/">Search by Name</a></li>
                            <li><a href="/">Search by Location</a></li>
                            <li><a href="/">Infamous Criminals</a></li>
                            <li><a href="/">Top 10 Wanted</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/">Unsolved Mysteries</a>
                        <ul class="dropdown-menu">
                            <li><a href="/">Cold Cases</a></li>
                            <li><a href="/">Missing Persons</a></li>
                            <li><a href="/">Conspiracies</a></li>
                            <li><a href="/">Share Your Leads</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/">Forensic Files</a>
                        <ul class="dropdown-menu">
                            <li><a href="/">How Forensics Work</a></li>
                            <li><a href="/">Famous Evidence Cases</a></li>
                            <li><a href="/">Tools of the Trade</a></li>
                            <li><a href="/">Learn Forensics</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar