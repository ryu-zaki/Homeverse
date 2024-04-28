import React from 'react'
import AboutImg from './imgs/about-banner-1.png'
import HouseImg from '../hero/imgs/house-icon.png'

import { Element } from 'react-scroll'

export default function AboutSection() {
  return (
    <article>
      <Element name='About' className='my-10 flex bg-white about-section mx-auto md:gap-10 lg:mx-0 lg:justify-center'>
        <section className='hidden w-1/2 lg:block'>
            <img className='min-w-full' src={AboutImg} alt=''/>
        </section>

        <section className='space-y-9 sm:flex sm:flex-col sm:items-center lg:items-start xl:space-y-7'>
            <p className='bg-lightOrange text-orange rounded-full w-fit p-2 px-6'>About us</p>
            <div className='space-y-7 sm:space-y-10 lg:space-y-7 xl:space-y-10'>
                <h2 className='text-3xl font-bold sm:text-center md:text-4xl lg:text-left xl:text-5xl'>The leading Real Estate Rental Marketplace</h2>
                <p className='text-subText leading-8 sm:text-center lg:text-left'>Over 29,000 people work for us in more than 70 countries world. This breadth of global average, combined with specialist services.</p>

                <div className='grid gap-5 text-subText text-sm w-full sm:grid-cols-2 sm:justify-center xl:text-base'>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-lightOrange p-3 rounded-full'><img src={HouseImg} alt='' /></div>
                        <p>Smart Home Design</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <div className='bg-lightOrange p-3 rounded-full'><img  src={HouseImg} alt='' /></div>
                        <p>Beautiful Scene Around</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <div className='bg-lightOrange p-3 rounded-full'><img  src={HouseImg} alt='' /></div>
                        <p>Exceptional Lifestyle</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <div className='bg-lightOrange p-3 rounded-full'><img  src={HouseImg} alt='' /></div>
                        <p>Complete 24/7 Security</p>
                    </div>
                </div>

                <p className='bg-lightOrange rounded-md border-l-2 border-orange pl-4 py-5 leading-8 p-3 sm:border-l-0 sm:border-b-2 sm:pl-3 sm:pb-4 sm:text-center lg:border-b-0 lg:border-l-2 lg:pb-3 lg:pl-4 lg:text-left'>"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</p>
            </div>

            <button className='text-sm bg-orange p-3 px-6 text-white rounded-md sm:text-base'>OUR SERVICES</button>
        </section>
        </Element>
    </article>
  )
}
