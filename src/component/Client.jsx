import React from 'react'
import ClientCard from './ClientCard'
import Terrace from '../assets/images/Terrace.png'
import Ellipse1 from '../assets/images/Ellipse1.png'
import Ellipse2 from '../assets/images/Ellipse2.png'
import Ellipse3 from '../assets/images/Ellipse3.png'
import backgroundImages from '../assets/images/YearListing.png'
const Client = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto text-white'>
            <ClientCard image1={Ellipse1} image2={Ellipse3} image3={Ellipse2} time='120k +' customers='Happy customers' style='bg-gray-200 dark:text-gray-900'/>
            <div className='rounded-2xl mx-6 text-white' style={{ backgroundImage:`url(${backgroundImages})`, backgroundSize: 'cover',height: 'auto',  backgroundRepeat: 'no-repeat'}}>
                <div className='flex justify-between p-6'>
                    <div className='space-y-3 p-4'>
                        <p className='text-3xl font-bold'>120k +</p>
                        <p className='font-medium'>Year Listings</p>
                    </div>
                    <div className='pt-6'>
                    <button className='bg-[#ABA6A6] px-7 font-medium py-3 rounded-md'>Explore</button>
                    </div>
                </div>
            </div>
            <ClientCard image4={Terrace} time='15 +' customers='Years of Experience'/>
        </div>
    </div>
  )
}

export default Client