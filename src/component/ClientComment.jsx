import React from 'react'
import ajasco from '../assets/images/rey.png'
import din from '../assets/images/mumu.png'
import ajalan from '../assets/images/joe.png'
import ajalans from '../assets/images/joe.png'
import WhatWeCard from './WhatWeCard'
import Heading from './Heading'
const ClientComment = () => {
  return (
    <div>
        <div>
            <Heading head='what our client say'/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-7 m-7 p-3">
  <div className="flex justify-center items-center">
    <WhatWeCard
      backgroundImages={ajasco}
      property='"Damilare john'
      property1="Using Terrace has been life changing and they are the best at what they do"
      style="bg-white text-black w-52 rounded-xl p-2 ml-24"
    />
  </div>
  <div className="flex justify-center items-center">
    <WhatWeCard
      backgroundImages={din}
      property="Zac Effron"
      qoute="Accountant"
    />
  </div>
  <div className="flex justify-center items-center">
    <WhatWeCard
      backgroundImages={ajalan}
      property="Joyce Mumu"
      qoute="Doctor"
    />
  </div>
  <div className="flex justify-center items-center">
    <WhatWeCard
      backgroundImages={ajalans}
      property="Joyce Mumu"
      qoute="Doctor"
    />
  </div>
</div>
        </div>
    </div>
  )
}

export default ClientComment