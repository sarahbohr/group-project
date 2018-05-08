import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        Denver Brewery Search
      </a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Brewery List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header