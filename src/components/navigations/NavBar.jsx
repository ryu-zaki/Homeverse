import React, { useRef } from 'react'
import EmailIcon from './imgs/email.png';
import LocationIcon from './imgs/location.png';
import logo from './imgs/logo.png';

/* Buttons */
import CartIcon from './imgs/cart.png';
import SearchIcon from './imgs/search.png';
import UserIcon from './imgs/user.png';
import MenuIcon from './imgs/menu.png';

/* Social Media */
import pinterestIcon from './imgs/pinterest.png';
import facebookIcon from './imgs/facebook.png';
import instagramIcon from './imgs/instagram.png';
import twitterIcon from './imgs/twitter.png';

export default function NavBar() {

  const [navVisible, setNavVisible] = React.useState(false);
  const [navFixed, setNavFixed] = React.useState(false);
  const navRef = useRef(null);

  React.useEffect(() => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setNavFixed(true);
          //console.log("not-visible")
          return;
        }

      //  console.log("visible")
        setNavFixed(false)
      })
    })

    observer.observe(navRef.current);


  }, []);


  return (
    <>
    <div>
    <div className='flex flex-col gap-5 bg-darkBlue text-white font-semibold p-5 px-3 text-xs sm:text-sm md:flex-row md:justify-between md:px-6 xl:text-base'>
      <div className='flex justify-between md:justify-start md:gap-5'>
        <div className='flex gap-1 items-center'>
            <img src={EmailIcon} alt='' />
            <p>info@homeverse.com</p>
        </div>

        <div className='flex gap-1 items-center' >
            <img src={LocationIcon} alt='' />
            <p>15/A, Nest Tower, NYC</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <nav>
            <ul className='flex gap-2'>
                <li>
                    <a href='/' ><img className='select-none' width={24} src={facebookIcon} alt='' /></a>
                </li>

                <li>
                    <a href='/' ><img className='select-none' width={24} src={twitterIcon} alt='' /></a>
                </li>

                <li>
                    <a href='/' ><img className='select-none' width={24} src={instagramIcon} alt='' /></a>
                </li>

                <li>
                    <a href='/' ><img className='select-none' width={24} src={pinterestIcon} alt='' /></a>
                </li>
            </ul>
        </nav>

        <button className='bg-orange p-2 px-4 rounded-md sm:px-6 sm:p-2'>Add Listing</button>
      </div>
    </div>



    {/* Second layer */}
    <div ref={navRef} className='h-24'> 
    <div className={`${navFixed && "nav-fixed"} opacity-0 flex bg-white h-24 sm:py-10 items-center w-full lg:justify-between lg:items-center lg:px-8 xl:px-16`}>
        <img className='mx-auto lg:mx-0' src={logo} alt='' />

        {navVisible && <div onClick={() => setNavVisible(false)}  className='bg-overlay z-10 fixed inset-0 lg:hidden'></div>}
        <nav className={`side-nav ${!navVisible && "-translate-x-full deac lg:translate-x-0"} transition-all duration-500 z-10 fixed left-0 bottom-0 bg-white p-8 sm:text-lg sm:p-12 lg:static lg:p-0 lg:text-base`}>
            <ul className='flex flex-col gap-8 lg:flex-row lg:gap-5 lg:justify-center xl:gap-8'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Service</a></li>
                <li><a href='/'>Property</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>


        <div className={`${navVisible && "translate-y-full"} nav-buttons flex justify-between p-5 transition-transform z-20 duration-500 px-8 fixed bottom-0 w-full left-0 right-0 items-center gap-2 text-dark bg-white text-sm sm:text-base md:px-16 lg:static lg:px-0 lg:p-0 lg:justify-start lg:w-auto lg:gap-5`}>
          <button className='flex gap-1 flex-col items-center shadow-box lg:p-3 lg:rounded-md'>
            <img className='w-5 sm:w-7 md:w-5' src={SearchIcon} alt='' />
            <p className='lg:hidden'>Search</p>
          </button>

          <button className='flex gap-1 flex-col items-center shadow-box lg:p-3 lg:rounded-md'>
            <img className='w-5 sm:w-7 md:w-5' src={UserIcon} alt='' />
            <p className='lg:hidden'>Profile</p>
          </button>

          <button className='flex gap-1 flex-col items-center shadow-box lg:p-3 lg:rounded-md'>
            <img className='w-5 sm:w-7 md:w-5' src={CartIcon} alt='' />
            <p className='lg:hidden'>Cart</p>
          </button>

          <button className='flex relative gap-1 flex-col items-center lg:hidden'>
            <div onClick={() => setNavVisible(true)} className='absolute inset-0'></div>
            <img className='w-5 sm:w-7 md:w-5' src={MenuIcon} alt='' />
            <p>Menu</p>
          </button>
        </div>

        
    </div>
    </div>
    </div>
    </>
  )
}
