import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-100 py-2 relative bottom-0 w-full'>
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} ComfySloth All rights reserved</p>
      </div>      
    </footer>
  )
}

export default Footer