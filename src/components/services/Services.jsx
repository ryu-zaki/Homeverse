import React from 'react'
import Service1 from './imgs/service-1.png'
import Service2 from './imgs/service-2.png'
import Service3 from './imgs/service-3.png'
import '../../App.css'
import { Element } from 'react-scroll'


export default function Services() {

  const services = [
    {
      name: "Buy a Home",
      imgSrc: Service1,
      description: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      link: ""
    },

    {
        name: "Rent a Home",
        imgSrc: Service2,
        description: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
        link: ""
      },

      {
        name: "Sell a Home",
        imgSrc: Service3,
        description: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
        link: ""
      },


]
.map(({name, imgSrc, description, link}, index) => <ServiceBox 
  key={index} 
  description={description}
  link={link}
  imgSrc={imgSrc}
  name={name}
    
/>)

  return (
    <article>
      <Element name='Service' className='flex flex-col gap-3 items-center py-20'>
      <p className='bg-lightOrange rounded-full text-orange p-2 px-6'>Our Services</p>  
      <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:mt-6'>Our Services</h2>
    
      <div className='mt-16 flex items-center flex-col gap-8 md:flex-row md:flex-wrap md:justify-center lg:gap-5 xl:flex-nowrap xl:gap-8'>
       {services}
      </div>

      </Element>
    </article>
  )
}


const ServiceBox = ({imgSrc, name, description, link}) => {
    
    
    
    return (
      <section className='bg-white service-box text-subText p-8 rounded-xl shadow-box text-center space-y-5 sm:w-11/12 md:w-96 xl:w-96'>
        <img className='mx-auto' src={imgSrc} alt='' />
        <h3 className='text-2xl text-dark font-bold'>{name}</h3>

        <p className='leading-7'>{description}</p>

        <button>Find a Home &rarr;</button>
      </section>
    )
}
