import React from 'react'
import Items from './Items'
import BillP from './BillP'

const Pos = () => {
  return (
    <div className='row w-100'>
        <div className='col-6'>
            <Items />
        </div>
        <div className='col-6'>
            <BillP />
        </div>
    </div>
  )
}

export default Pos