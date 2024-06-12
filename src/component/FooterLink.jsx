import React from 'react'

const Link = ({heading,link_1,link_2,link_3}) => {
  return (
    <div className='space-y-3 lg:my-3'>
            <h5 className='font-semibold text-lg'>{heading}</h5>
            <p>{link_1}</p>
            <p>{link_2}</p>
            <p>{link_3}</p>
    </div>
  )
}

export default Link