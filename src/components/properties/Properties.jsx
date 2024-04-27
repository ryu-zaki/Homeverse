import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

/* Property pictures */
import property1 from './imgs/property-1.jpg'
import property2 from './imgs/property-2.jpg'
import property3 from './imgs/property-3.jpg'
import property4 from './imgs/property-4.png'

import author from './imgs/author.jpg'

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Properties() {
  
  const properties = [
    { 
      price: 40000,
      location: "1234 N Michigan Ave",
      imgSrc: property1,
      status: "FOR RENT",
      details: {
        bedrooms: 4,
        bathrooms: 2,
        square: 3000
      }
    },

    { 
      price: 35000,
      location: "5678 W Madison St",
      imgSrc: property2,
      status: "FOR RENT",
      details: {
        bedrooms: 3,
        bathrooms: 2,
        square: 2800
      }
    },

    { 
      price: 60000,
      location: "910 E 71st St, Chicago",
      imgSrc: property3,
      status: "FOR RENT",
      details: {
        bedrooms: 5,
        bathrooms: 3,
        square: 4380
      }
    },

    { 
      price: 45000,
      location: "2460 S Wentworth Ave",
      imgSrc: property4,
      status: "FOR SALES",
      details: {
        bedrooms: 4,
        bathrooms: 2,
        square: 3400
      }
    }
  ]
  .map((data, index) => {
    return (
       <SwiperSlide key={index}>
        <PropertyCatalog  data={data}  />
       </SwiperSlide>
    )
  })


  return (
    <article className='mb-32'>
    <div className='flex flex-col items-center'>
      <p className='bg-lightOrange text-orange rounded-full w-fit p-2 px-6'>Properties</p>
      <h2 className='text-3xl mt-5 font-bold sm:text-center md:text-4xl lg:text-left xl:text-5xl'>Featured Listings</h2>
    </div>


      <Swiper 
       breakpoints={{
        750: {
         slidesPerView: 2
        }
       }}
       effect={'coverflow'}
       grabCursor={true}
       autoplay={{
        delay: 2000
       }}
       centeredSlides={true}
       loop={true}
       spaceBetween={10}
       slidesPerView={1}
       coverflowEffect={{
         rotate: 0,
         stretch: 0,
         depth: 100,
       }}
       pagination={{ el: '.swiper-pagination', clickable: true }}
       navigation={{
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
         clickable: true,
       }}
       modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
       className="swiper_container relative mt-20"
       > 
       
       {properties}
        
        <div>
        <div className="swiper-pagination"></div>
        </div>
       

      </Swiper>
    </article>
  )
}

const PropertyCatalog = ({data}) => {

  const {price, location, imgSrc, status, details} = data
  const {bedrooms, bathrooms, square} = details;

  const isForRent = status === "FOR RENT" ? "bg-green" : "bg-orange";

  return (
    <section className=' bg-white flex flex-col gap-8'>
      <div className='relative h-64 sm:h-80'>
        <img className='object-cover h-full w-full inset-0 absolute' src={imgSrc} alt='' />

        <div className='absolute p-5 h-full w-full top-0 left-0 text-white catalog-desc z-10 flex flex-col justify-between'>
          
          <span className={`${isForRent} self-end text-xs p-3 font-semibold`}>{status}</span>

          <div className='flex justify-between'>
            <div className='flex items-center gap-1'>
            <ion-icon name="location"></ion-icon>
            <span>{location}, Chicago</span>
            </div>

            <div className='flex gap-2'>
              <div className='flex items-center gap-1'>
              <ion-icon name="camera"></ion-icon>
                <span>4</span>
              </div>

              <div className='flex items-center gap-1'>
              <ion-icon name="albums"></ion-icon>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Descriptions */}

      <div className='flex flex-col gap-5 w-full px-4'>
        <h2 className='text-orange'>
          <b className='text-3xl'>${price.toLocaleString()}</b>
          <span>/month</span>
        </h2>

        <h2 className='text-2xl font-bold'>New Apartment Nice View</h2>
        <p>Beautiful Huge 1 Family House in Heart Of Westbury, Newly Renovated With New Wood</p>

        <div className='flex justify-between w-full mt-5 gap-4'>
          <div className="grow border-r border-r-dark">
            <div className='flex items-center gap-1'>
            <span>{bedrooms}</span> 
            <ion-icon name="bed-outline"></ion-icon>
            </div>
            

            <p>Bedrooms</p>
          </div>

          <div className="grow border-r border-r-dark">
           <div className='flex items-center gap-1'>
           <span>{bathrooms}</span>
            <ion-icon name="person-circle-outline"></ion-icon>
           </div>

            <p>Bathrooms</p>
          </div>

          <div className="grow">
            <div className='flex items-center gap-1'>
            <span>{square}</span>
            <ion-icon name="person-circle-outline"></ion-icon>
            </div>

            <p>Square Ft</p>
          </div>

        </div>


        <div className='flex justify-between mt-5 items-center'>
          <div className='flex justify-between items-center gap-3'>
          <img className='w-14 rounded-full' src={author} alt='' />
          <div>
            <h3 className='text-xl font-semibold'>William Seklo</h3>
            <p>Estate Agent</p>
          </div>
          </div>

          <div className='text-lg z-40'>
            <div className='cursor-pointer'>
            <ion-icon name="resize-outline"></ion-icon>
            </div>
              
            <div className='cursor-pointer'>
            <ion-icon name="heart-outline cursor-pointer"></ion-icon>

            </div>

            <div className='cursor-pointer'>
            <ion-icon name="add-circle-outline cursor-pointer"></ion-icon>

            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
