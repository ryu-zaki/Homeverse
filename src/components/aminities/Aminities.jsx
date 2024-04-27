import React from 'react'


const Aminities = () => {

    //factoring function
    const aminityObj = (icon, title) => {
        return {
            icon,
            title
        }
    }
    
    const aminitiesBoxes = 
    [
        aminityObj("car-sport-outline", "Parking Space"),
        aminityObj("water-outline", "Swimming Pool"),
        aminityObj("shield-checkmark-outline", "Private Security"),
        aminityObj("heart-outline", "Medical Center"),
        aminityObj("library-outline", "Library Area"),
        aminityObj("bed-outline", "King Size Beds"),
        aminityObj("home-outline", "Smart Homes"),
        aminityObj("tennisball-outline", "Kid's Playland"),



        
    ]
    .map(({icon, title}, index) => {
        return <CategoryBox key={index} icon={icon} title={title} />
    })
    

    return (
        <article className="py-20">
            <div className="flex flex-col items-center">
              <p className='bg-lightOrange text-orange rounded-full w-fit p-2 px-6'>Properties</p>
              <h2 className='text-3xl mt-5 font-bold sm:text-center md:text-4xl lg:text-left xl:text-5xl'>Featured Listings</h2>
            </div>

            <div className="grid-container-aminities grid grid-cols-2 gap-2 mt-8 gap-y-10 sm:items-center md:grid-cols-3 md:gap-10 md:justify-center xl:grid-cols-4 xl:gap-4 xl:gap-y-10 xl:mt-16">
              {aminitiesBoxes}
            </div>
        </article>
    )
}


const CategoryBox = ({icon, title}) => {

    const [isActive, setIsActive] = React.useState(false);

    console.log(isActive)
    return (
     <section className={`${isActive && "active"} flex justify-center shadow-box rounded-xl`}>

       <section className={`relative rounded-xl w-full min-h-40 text-dark flex justify-center items-center flex-col gap-4 sm:w-52 sm:mx-auto md:w-full xl:h-52`}>
       <div className="text-4xl text-orange transition-all duration-300">
        <ion-icon name={icon}></ion-icon>
       </div>

        <h3 className="font-semibold select-none transition-all duration-300 xl:text-xl">{title}</h3>
    
       </section>
      
       <div onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className={`${isActive && "scale-150"} transition-all duration-300 absolute flex justify-center items-center cursor-pointer p-3  rounded-full z-10 bg-white bottom-0 translate-y-1/2 xl:text-xl`}>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
</section>
    )
}


export default Aminities;