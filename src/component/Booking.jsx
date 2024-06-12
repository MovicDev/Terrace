import React from 'react'
import Info from './Info'
import Search from './Search'

const Booking = () => {
  return (
    <div>
        <div className='bg-white rounded-2xl m-7 p-5'>
                <div className='flex space-x-6 font-bold'>
                    <p className='border border-b-4 border-t-0 border-l-0 border-r-0 w-3 border-black'>Buy</p>
                    <p className='text-gray-500'>Rent</p>
                </div>
                <div className='lg:flex justify-between my-5 align-baseline'>
                    <Info price='Price Ratings' location='Location' property='Property Type'/>
                    <Search />
                </div>
        </div> <br />
    </div>
  )
}

export default Booking