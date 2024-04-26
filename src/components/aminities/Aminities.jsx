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
        return (
            <section key={index}>
                <div>
                <ion-icon name={icon}></ion-icon>
                </div>

                <h3>{title}</h3>

                <div>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </section>
        )
    })
    

    return (
        <article>
            <div className="flex flex-col items-center">
              <p className='bg-lightOrange text-orange rounded-full w-fit p-2 px-6'>Properties</p>
              <h2 className='text-3xl mt-5 font-bold sm:text-center md:text-4xl lg:text-left xl:text-5xl'>Featured Listings</h2>
            </div>

            <div className="">
              {aminitiesBoxes}
            </div>
        </article>
    )
}


export default Aminities;