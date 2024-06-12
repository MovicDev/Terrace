import React from 'react'
import WhatWeCard from './WhatWeCard'
import image1 from '../assets/images/cardimg.png'
import image2 from '../assets/images/cardimg2.png'
import image3 from '../assets/images/cardimg3.png'
import image4 from '../assets/images/cardimg4.png'
import Heading from './Heading'
const WhatWeDo = () => {
  return (
    <div>
        <div>
            <Heading head='what will do'/>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 m-7 my-4">
  <div className="lg:col-span-2 xl:col-span-2">
    <WhatWeCard
      backgroundImages={image1}
      property="Property Management"
      qoute="We help handle and manage your property at a click."
    />
  </div>
  <div className="lg:col-span-1 xl:col-span-1">
    <WhatWeCard
      backgroundImages={image2}
      property="Marketing and Sales"
      qoute="Selling out your properties just got easy."
    />
  </div>
  <div className="lg:col-span-1 xl:col-span-1">
    <WhatWeCard
      backgroundImages={image3}
      property="Negotiation and Offers"
      qoute="Managing your property at a glance."
    />
  </div>
  <div className="lg:col-span-1 xl:col-span-1">
    <WhatWeCard
      backgroundImages={image4}
      property="Developers and Design"
      qoute="Selling out your properties just got easy."
    />
  </div>
</div>


            </div>
    </div>
  )
}

export default WhatWeDo