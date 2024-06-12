import React from 'react'
import Heading from './Heading'
import WhatWeCard from './WhatWeCard'
import ajasco from '../assets/images/ajasco.png'
import ajalan from '../assets/images/ajalan.png'
import din from '../assets/images/din.png'
const Property = () => {
  
  return (
    <div>
        <div>
            <Heading head='best property avaliable'/>
            <div className="m-7 p-3 overflow-x-auto">
  <div className="flex space-x-6 lg:space-x-0 lg:grid lg:grid-cols-3 lg:gap-7 items-center justify-center">
    <div className="flex-shrink-0 w-full lg:w-auto">
      <WhatWeCard backgroundImages={ajasco} property="Ajasco Villa" />
    </div>
    <div className="flex-shrink-0 w-full lg:w-auto block lg:hidden">
      <WhatWeCard backgroundImages={din} property="D. In House" />
    </div>
    <div className="flex-shrink-0 w-full lg:w-auto">
      <WhatWeCard backgroundImages={din} property="D. In House" />
    </div>
    <div className="flex-shrink-0 w-full lg:w-auto">
      <WhatWeCard backgroundImages={ajalan} property="Ajalekoko Villa" />
    </div>
    <div className="flex-shrink-0 w-full lg:w-auto block lg:hidden">
    <WhatWeCard backgroundImages={ajasco} property="Ajasco Villa" />
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default Property