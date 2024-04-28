import React from 'react'
import houseIcon from './imgs/house-icon.png';
import HeroBanner from './imgs/hero-banner.png';
import { Element } from 'react-scroll';

export default function HeroSection() {
  return (
    <article>
        <Element name="Home" className='py-14 flex hero-section flex-col gap-10 items-center lg:flex-row lg:justify-center lg:py-28'>
        <section>
          <header className='flex flex-col gap-5 sm:gap-10 sm:items-center sm:text-center lg:text-left lg:items-start'>
            <div className='flex gap-1 items-center font-semibold text-sm sm:text-base'>
                <img src={houseIcon} alt='' />
                <p>Real Estate Agency</p>
            </div>
            <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>Find Your Dream House By Us</h1>
            <p className='pl-2 text-subText leading-8 border-l-2 border-orange sm:tetx-base sm:pl-0 sm:border-l-0 sm:border-b-2 sm:pb-4 sm:px-8 lg:border-b-0 lg:border-l-2 lg:pl-4 xl:text-lg lg:pb-0 lg:py-3'>Take a look at our different properties that can ensure our comfort, satisfaction, and safety</p>
          </header>

          <button className='text-sm bg-orange p-3 px-6 text-white rounded-md block mt-7 sm:text-base sm:mx-auto lg:mx-0 xl:mt-10'>Make an Enquiry</button>
        </section>

        <section> 
          <img draggable={false} src={HeroBanner} alt=''/>
        </section>
        </Element>
    </article>
  )
}
