import React from 'react'
import ServiceCardData from '../../Data/ServerData'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <>
    
    <section className="text-gray-600 body-font" id="serivce">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {
              ServiceCardData.map((items) =>{
                return(<>
                <ServiceCard name ={items.ServiceName} available={items.availableSevice} />
                </>)
              })
            }
            
            {/* <ServiceCard /> */}
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Services