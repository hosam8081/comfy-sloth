import React from 'react';
import Link from 'next/link'

const PageHero = ({title, prod}) => {
  return (
    <div className="py-16 bg-primary-50">
      <div className="container">
        <h3 className="text-primary-100 font-bold capitalize text-2xl">
          <Link href="/">
            <a className="text-primary-400 capitalize">home</a>
          </Link>
          {prod && 
            <Link href="/products">
              <a className="text-primary-400 px-2 capitalize">/ {prod}</a>
            </Link>
          }
          <span className='px-2'>
          /
          </span>
          <span >
            {title}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default PageHero