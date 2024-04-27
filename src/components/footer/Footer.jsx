import React from 'react';
import logoLight from './imgs/logo-light.png'


const Footer = () => {

    const detaiObj = (category, itemArr) => {
        return {
          category, 
          itemArr
        }
    }

    const footerDetails = [
        detaiObj("Company", ["About", "Blog",  "All Products", "Locations Map", "FAQ", "Contact us"]),
        detaiObj("Services", ["Order Tracking", "Wish List",  "Login", "My account", "Terms and Conditions", "Promotional Offer"]),
        detaiObj("Customer Care", ["Login", "My Account",  "Wish List", "Order Tracking", "FAQ", "Contact us"])
    ]
    .map(({category, itemArr}, index) => {
        return <DetailSection key={index} category={category} itemArr={itemArr} />
    })

    return (
        <footer className='flex flex-col items-center gap-6 bg-darkBlue text-white mt-24 xl:gap-0'>
            <div className='bg-orange w-11/12 p-8 rounded-xl flex flex-col gap-5 items-center -translate-y-1/2 md:p-10 xl:flex-row xl:justify-between xl:p-20'>
                <div className='text-center xl:text-left'>
                    <h2 className='text-2xl font-bold mb-2 md:text-3xl xl:text-5xl'>Looking For a Dream Home?</h2>
                    <p className='xl:text-lg xl:mt-5'>We can help you realize your dream of a new home</p>
                </div>

                <button className='flex rounded-md font-semibold items-center gap-1 bg-white p-3 px-6 text-dark'>
                    <span>Explore Properties</span>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
            </div>

           <div className='flex flex-col gap-10 items-center px-5 md:w-full md:px-16 md:pb-10 md:gap-16 lg:flex-row lg:justify-center xl:px-24 xl:pb-20'>
            <div className='flex flex-col gap-4 w-full lg:max-w-80 xl:max-w-full'>
                <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                    <img className='mb-5' src={logoLight} alt='' />
                    <p>Thankyou for visiting and supporting our platform. Have a great day!</p>
                </div>

                <div className='flex flex-col items-center gap-3 md:items-start'>
                    <div className='flex items-center gap-1'>
                     <ion-icon name="location-outline"></ion-icon>
                     <p>Brooklyn, New York, United States</p>
                    </div>


                    <div className='flex items-center gap-1'>
                    <ion-icon name="mail-outline"></ion-icon>
                     <p>contact@homeverse.com</p>
                    </div>

                    <div className='flex items-center gap-1'>
                    <ion-icon name="call-outline"></ion-icon>
                     <p>+0123-456789</p>
                    </div>
                </div>

                <div className='text-xl flex gap-3 justify-center md:justify-start'>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>

            <article className='flex w-full flex-col gap-10 text-center md:text-left md:flex-row md:justify-between'>
                {footerDetails}
            </article>

        </div>


            <div className='bg-lightBlue w-full p-4 text-center'>
                <p>&copy; {new Date().getFullYear()} jhonwellespanola. All Rights Reserved</p>
            </div>
        </footer>
    )
}


const DetailSection = ({category, itemArr}) => {


    return (
    <section>
        <h3 className='text-xl font-bold mb-3'>{category}</h3>
        <ul className='flex flex-col gap-3'>
            {itemArr.map(item => <li>{item}</li>)}
        </ul>
    </section>
    )
}

export default Footer; 