import React from 'react'
import { Link } from 'react-router-dom'
import BannerInput from '../Banner/BannerInput/BannerInput'
import icon from '../logo-blue.png'
import './Header.css'

const Header = () => {
  return (
    <div className='bg-img'>
    <nav className="navbar navbar-expand-lg navbar-light full-bg my-lg-0 dashbord">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={icon} alt="" width="150" height="50" />
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-design" id="navbarTogglerDemo02">
                <div className="col col-lg-6">
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
                  </ul>
                </div>
                    <div class="col col-lg-6">
                    {/* <li className="nav-item d-flex flex-row-reverse bd-highlight"> */}
                    <Link className='d-flex justify-content-end page-item text-decoration-none' to="/">Add Listing</Link>
                    {/* </li> */}
                    </div>
                   {/* <li className="nav-item d-flex flex-row-reverse bd-highlight">
                    <Link className='text-nav page-item p-2 text-decoration-none' to="/">Add Listing</Link>
                    </li> */}
           
          </div>
        </div>
      </nav>
      {/* heading-start */}
     <div className='page-heading container'>
        <h1>Find Your Dream House</h1>
        <h5 className='para'>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</h5>

      <BannerInput/>
     </div>
    </div>
  )
}

export default Header