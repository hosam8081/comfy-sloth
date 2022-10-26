import React from 'react'
import Link from 'next/link'
const ErrorPage = () => {
  return (
    <div className='text-center py-24 bg-primary-800'>
      <h2 className='text-9xl font-bold'>404</h2>
      <h3 className='text-3xl font-bold capitalize py-10'>sorry, the page you tried cannot be found</h3>
      <Link href="/">
        <a className='btn btn-main'>back home</a>
      </Link>
    </div>
  )
}

export default ErrorPage