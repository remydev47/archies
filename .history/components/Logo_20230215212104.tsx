import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image 
        src="/images/logo.png"
        alt='cleanu'
        height={55}
        width={150}
      />
    </div>
  )
}

export default Logo