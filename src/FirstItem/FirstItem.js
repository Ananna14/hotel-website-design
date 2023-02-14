import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';

const Testimonial = () => {
  // const{user} = useAuth();
  const [reviews, setReviews]  = useState([]);

  useEffect(() => {
            fetch("./featured.json")
            .then(res => res.json())
            .then( data => setReviews(data))
        }, []);
        // console.log(reviews);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHaight: true,
    autoplayspeed: 3000,
    responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
          }
      }
  ]
   
  };
  // console.log(reviews)
  return (
    <div className=''>
      <div className="container mt-5">
      <h2>Featured Properties</h2>
      <p className='team-text'>Handpicked Exclusive Properties By Our Team.</p>
          <Slider {...settings}>
            {
              reviews.map(review => <div className='p-4' review={review} key={review._id}>
               <div className="card card-design" >
                {/* <p className='team-img'>For Sale</p> */}
                <img src={review.img} className="card-img-top team-img" alt="..." style={{height: 250}}/>
                <div className="card-body">
                  <div className='d-flex justify-content-start'>
                  <span className='house-text'>House</span>
                  </div>
                  <h6 className="text-start card-text mt-2 fw-bold">{review.heading}</h6>
                  <p className="text-start mt-2"><i class="fa fa-location-dot"></i>{review.address}</p>
                    {/* beds-etc-added */}
                    {/* <ul className='text-ul d-flex'>
                      <li>Baths</li>
                      <li className='px-2'>Beds</li>
                      <li className='px-2'>Rooms</li>
                      <li className='px-2'>Area</li>
                    </ul>
                    <ul className='text-ul d-flex'>
                      <li className='px-2'>Baths</li>
                      <li className='px-2'>Beds</li>
                      <li className='px-2'>Rooms</li>
                      <li className='px-2'>Area</li>
                    </ul> */}
                  <div className='d-flex'>
                    <p>Baths</p>
                    <p className='px-2'>Beds</p>
                    <p className='px-2'>Rooms</p>
                    <p className='px-2 text-wrap'>Area</p>
                  </div>
              {/* number-baths */}
                  <div className='d-flex'>
                    <p className='lh-base'><i class="fa fa-bath"></i><span className='px-2'>2</span></p>
                    <p className='px-2'><i class="fa fa-bed"></i><span className='px-2'>3</span></p>
                    <p className='px-2'><i class="fa fa-inbox"></i><span className='px-2'>3</span></p>
                    <p className='px-2'><i class="fa fa-map"></i><span className='px-2'>4300 Sq Ft</span></p>
                    <hr/>
                  </div>
                </div>
              
              </div>
              </div>)
            }
          </Slider>
     </div>
    </div>
  )
}

export default Testimonial;