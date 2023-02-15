import React from 'react'

const Teams = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold leading-tight text-gray-500 sm:text-2xl lg:text-3xl">AWESOME TEAM</h2>
            <p className="text-4xl mx-auto mt-4 font-bold leading-relaxed text-black">The best team to clean your surrounding area.</p>
            <h1 className='text-gray-600 font-normal text-xl'>Our Studio prides itself on delivering exceptionally high standards in all our Design Contracts and we understand all our customer needs.</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">

            <div>
                <img className="w-full rounded-full" src="/images/profile-1.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-black'>Anna Greene</h1>
                <p className='text-center text-base font-serif text-gray-500'>SENIOR ENGINEER</p>
            </div>

            <div>
                <img className="w-full rounded-full" src="/images/profile-2.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-black'>Dianne Russel</h1>
                <p className='text-center text-base font-serif text-gray-500'>ARCHITECT</p>
            </div>

            <div>
                <img className="w-full rounded-full" src="/images/profile-3.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-black'>Sarah Taylor</h1>
                <p className='text-center text-base font-serif text-gray-500'>FOUNDER</p>
            </div>

        
        </div>
    </div>
</section>
  )
}

export default Teams