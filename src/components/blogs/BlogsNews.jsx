import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Element } from 'react-scroll';

/* Blog Images */
import Blog1 from './imgs/blog-1.png'
import Blog2 from './imgs/blog-2.jpg'
import Blog3 from './imgs/blog-3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const BlogsNews = () => {
    
    const blogObj = (title, category, imgSrc) => {
        return {
            title, 
            category, 
            imgSrc
        }
    }

    const blogsSections = [
        blogObj("The Most Inspiring Design Of 2021", "Interior",  Blog1),
        blogObj("Recent Commercial Real Estate Transactions", "Estate",  Blog2),
        blogObj("Renovating a Living Room? Experts Share Their Secrets", "Room",  Blog3)
    ]
    .map(({title, category, imgSrc}, index) => {
        return (

            <SwiperSlide key={index} >
                <BlogCard 
                   title={title} 
                   category={category} 
                   imgSrc={imgSrc} />
            </SwiperSlide>

        )
    })

    const breakpoints = {
        750: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },


        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }

    return (
        <article>
          <Element name='Blog'>
            <div className="flex flex-col items-center">
              <p className='bg-lightOrange text-orange rounded-full w-fit p-2 px-6'>News and Blogs</p>
              <h2 className='text-3xl mt-5 font-bold sm:text-center md:text-4xl lg:text-left xl:text-5xl'>Lastest news Feeds</h2>
            </div>

              <Swiper
                modules={[Scrollbar]}
                breakpoints={breakpoints}
                scrollbar={{ draggable: true, dragSize: 70 }}
                spaceBetween={10}
                className='mt-10 mb-20 md:mt-14'
              >
                {blogsSections}
              </Swiper>
          </Element>
        </article>
    )

};


const BlogCard = ({title, category, imgSrc}) => {

    return (
        <section className='flex flex-col gap-5 mb-10'>
          
          <div className='blog-con-img h-56 overflow-hidden relative sm:h-72'>
            <img className={`transition-all duration-500 absolute object-cover inset-0 h-full w-full`} src={imgSrc} alt='' />  
          </div>       

        <div className='p-4 flex flex-col gap-5 md:gap-8'>
          <div className='flex justify-between'>
            <div className='text-orange flex items-center gap-1'>
              <ion-icon name="person"></ion-icon>
              <span className='text-subText'>by: Admin</span>
            </div>

            <div className='text-orange flex items-center gap-1'>
              <ion-icon name="pricetags"></ion-icon>
              <span className='text-subText'>{category}</span>
            </div>
          </div>

          <h2 className='text-xl font-bold cursor-pointer hover:text-orange sm:text-2xl lg:text-xl xl:text-2xl'>{title}</h2>

          <div className='flex justify-between'>
            <div className='text-orange flex items-center gap-1'>
              <ion-icon name="calendar"></ion-icon>
              <span className='text-subText'>Apr 27, 2023</span>
            </div>

            <button className='text-orange'>READ MORE</button>
          </div>

        </div>
        </section>
    )
}


export default BlogsNews;