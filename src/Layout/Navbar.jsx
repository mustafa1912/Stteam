import React from 'react'
import { NavLink } from 'react-router-dom'
// bootstrap
import '../style/css/nav.css'
function Nav() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid row m-0">
                    <div className='col-3 col-sm-3 col-md-2 col-lg-1 d-flex'>
                        <NavLink className="navbar-brand p-3 m-0" to="/">
                            <img src="/images/st.png" alt="logo" title='logo' className='w-100' />
                        </NavLink>
                    </div>
                    <div className='d-flex col-9 col-sm-9 col-md-6 col-lg-6 justify-content-end' >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav d-flex  justify-content-evenly w-100   ">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link text-white" href="#">PROJECTS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link text-white" href="#">GALLERY</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link text-white" href="#">CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-outline-origin border-0" type="button"  >
                            <i className="fa-solid fa-bars fs-2" ></i>
                        </button>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav