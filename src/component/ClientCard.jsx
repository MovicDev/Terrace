import React from 'react'

const ClientCard = ({image1,image4,image2,image3,time,customers, style}) => {
  return (
    <div>
        <div className={`flex justify-between p-7 m-10 space-x-10 text-white rounded-2xl bg-black ${style}`} >
            <div className='space-y-3 p-2'>
                <p className='text-3xl font-bold'>{time}</p>
                <p className='font-medium'>{customers}</p>
            </div>
            <div>
                <div className='flex justify-between gap-1'>
                <img src={image1} alt="" className=' w-12'/>
                <img src={image2} alt="" className=' w-12'/>
                </div>
                <img src={image3} alt="" className='mx-auto w-12' />
                <div className='relative top-7'>
                <img src={image4} alt="" className='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientCard