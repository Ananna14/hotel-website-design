import React from 'react'

const BannerInput = () => {
  return (
    <div>
        <div class="row justify-content-md-center">
            <div class="col col-lg-4">
                <input type="text" className='input-design p-4' name="" placeholder='Search for Homes by Address, City . . . .' id="" />
            </div>
            {/* <div class="col-sm col-lg"> */}
                <button className="col col-lg-4 nice-select select_option form-control open btn btn-color dropdown-toggle input-design p-3 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                All Categories
                </button>
                <ul className="dropdown-menu w-25" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">All Categories</a></li>
                    <li><a class="dropdown-item" href="#">House</a></li>
                    <li><a class="dropdown-item" href="#">Apartement</a></li>
                    <li><a class="dropdown-item" href="#">Hotel</a></li>
                    <li><a class="dropdown-item" href="#">Luxury</a></li>
                </ul>
            {/* </div> */}
            {/* <div class="col col-lg-4"> */}
                <button className='col col-lg-4 btn-search p-4'><i className="fa fa-magnifying-glass"></i><span className='px-2'>SEARCH</span></button>
            {/* </div> */}
        </div>
    </div>
  )
}

export default BannerInput