import React from 'react'
import Heading from './lal/Heading'
import ProductCard from './lal/ProductCard'

const Categories = () => {
  return (
    <div className='w-full px-40 py-10'>
        <Heading text='Top Categories' />
        <div className='grid grid-cols-4 gap-10'>
            <ProductCard designType='CATEGORY PRODUCT' />
            <ProductCard designType='CATEGORY PRODUCT' />
            <ProductCard designType='CATEGORY PRODUCT' />
            <ProductCard designType='CATEGORY PRODUCT' />
        </div>
    </div>
  )
}

export default Categories
