import React from 'react'

const WhatWeCard = ({backgroundImages,property,qoute,style,property1}) => {
  return (
    <div>
        <div className='rounded-3xl relative w-full mx-auto flex flex-col justify-center items-center '>
        <img src={backgroundImages} alt={property} className="w-full mx-auto h-auto object-cover" />
                <div className='absolute bottom-10 left-0 w-full  text-white p-4 '>
                <h5 className={`font-medium text-lg ${style}`}>{property} <br /> <span className='text-sm'>{property1}</span></h5>
                <p className='w-[80%] '>{qoute}</p>
                </div>
        </div>
    </div>
  )
}

export default WhatWeCard