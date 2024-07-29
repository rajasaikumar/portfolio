import React from 'react';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-secondary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="home" smooth={true} duration={200}>Home</Link>
        </li>
        <li class="nav-item">
        <Link to="about" smooth={true} duration={200}>About</Link>
        </li>
        <li class="nav-item">
        <Link to="contact" smooth={true} duration={200}>Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</header>
    
  )
}

export default Header
