import React from 'react'
import Image from 'next/image'

const services=[
    {
        image:'/images/service1.1.jpg',
        title:'INTERIOR DESIGN',
        description:"We provide full interior designing services from highly trained  creatives…"
    },
    {
        image:'/images/service2.1.jpg',
        title:'ARCHITECTURE',
        description:"Busy schedules make it difficult to find time to find a compitent Architect…"
    },
    {
        image:'/images/service2.3.jpg',
        title:'DESIGN & PLANNING',
        description:"Imagine Seeing your house from a Design on a Paper to material residence from Compitent engineers"
    },
   
]

const Services = () => {
  return (
   <section className="bg-gray-200 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-bold leading-tight text-gray-600  lg:text-xl">...OUR...</h2>
      <p className="max-w-xl mx-auto mt-4 text-4xl font-extrabold leading-relaxed text-black">
       WHAT WE'RE OFFERING
      </p>
    </div>

    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
      {services.map((item, i) => (
     <div className="overflow-hidden bg-white border-2 border-gray-300 rounded-md hover:bg-blue-700">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div>
                <Image
                   src={item.image} 
                   className="h-[50%] w-[50%] align-center"
                   height={120}
                   width={120}
                 />
             </div>
             <h2 className='font-bold text-3xl text-gray-400 text-center mt-2'>
               {item.title}
             </h2>
             <p className='text-xl text-black text-center '>
              {item.description}
             </p>
          </div>                     
     </div>
     ))}
    </div>
</div>
</section>
  )
}

export default Services