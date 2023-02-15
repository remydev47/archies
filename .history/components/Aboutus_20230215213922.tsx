import React from 'react'

const Aboutus = () => {
  return (
    <section className="py-6 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-xl text-gray-200 text-center'>WELCOME TO OUR AGENCY</h1>
                <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">MOST EXPERIENCED BUILDERS ARCHITECTS & DESIGNERS</h2>
                <h2 className='text-gray-300 font-serif italic '>WE ARE BUILDING EVERTHING YOU ALWAYS WANTED IN ARCHITECT</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                  We are specializes in Architectural services such as product engineering,warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand..
                </p>
            </div>

            <div className=" pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                 <img className="relative -top-4 -left-4" src="/images/about.jpg" alt="" />
                

                    
                    <div className="absolute -bottom-10 -left-16 m-2">
                        
                         
                          <div className="px-8 py-8 bg-white">
                               <span className="block text-4xl font-bold text-black lg:text-5xl"> 50+ </span>
                                <span className="block mt-2 text-base leading-tight text-black"> Team<br />Member</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutus