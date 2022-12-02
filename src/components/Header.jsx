import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <nav class="navbar bg-light">
            <div class="container-fluid d-flex justify-content-between py-2">
                <h1 class="mb-0">Contact Manager</h1>
                <div className="">
                <Link to="/" className="btn btn-outline-info me-3">Home</Link>
                <Link to="/addcontact" className="btn btn-outline-info">Add contact</Link>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Header