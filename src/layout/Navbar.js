import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Full Stack Application</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link type="button" to="/adduser" className="btn btn-outline-light" >Add user</Link>
    
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
