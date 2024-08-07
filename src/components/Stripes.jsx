import React from 'react'
import Stripe from './Stripe'

function Stripes() {

  var data =[
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', number: 48},
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', number: 2},
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg', number: 11},
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg', number: 48},
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg', number: 2},
    {url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg', number: 11},
  ]

  return (
    <div className='flex items-center mt-20'>
      {data.map((elem, index) => 
        <Stripe key={index} val={elem}/>
      )}
    </div>
  )
}

export default Stripes