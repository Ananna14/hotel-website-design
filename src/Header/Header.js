import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../logo-blue.png'
import './Header.css'

const Header = () => {
  return (
    <div className='bg-img'>
    <nav className="navbar navbar-expand-lg navbar-light full-bg my-lg-0 dashbord">
        <div className="container-fluid col-12">
          <div className="">
            <a className="navbar-brand" href="#">
              <img src={icon} alt="" width="150" height="50" />
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-design" id="navbarTogglerDemo02">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className='text-nav page-item text-decoration-none p-2' to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='text-nav text-decoration-none page-item p-2' to="/">PAGES</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='text-nav page-item text-decoration-none p-2' to="/">BLOG</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='text-nav page-item p-2 text-decoration-none' to="/">Contact Us</Link>
                    </li>
                   {/* <li className="nav-item d-flex flex-row-reverse bd-highlight">
                    <Link className='text-nav page-item p-2 text-decoration-none' to="/">Add Listing</Link>
                    </li> */}
                </ul>
          </div>
        </div>
      </nav>
      {/* heading-start */}
     <div className='page-heading container'>
        <h1>Find Your Dream House</h1>
        <h5 className='para'>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</h5>
        {/* search-icon-added */}
      <div className="row">
      <div className='d-flex justify-content-center my-5'>
         {/* input-start */}
       <div>
          <input type="text" className='input-design p-4' name="" placeholder='Search for Homes by Address, City . . . .' id="" />
       </div>
       {/* dropdown-start */}
        {/* <div> */}
          <button className="btn btn-color dropdown-toggle input-design p-3 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           All Categories
          </button>
          <ul className="dropdown-menu w-25" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        {/* </div> */}
        {/* search-btn-add */}
        <div>
          <button className='btn-search p-4'><i className="fa fa-magnifying-glass"></i><span className='px-2'>SEARCH</span></button>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Header