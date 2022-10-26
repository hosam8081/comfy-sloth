import Link from 'next/link'
import React from 'react'
import { links } from '../utils/constants'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../slice/navbarSlice'
const Sidebar = () => {
  const dispatch = useDispatch();
  const {isOpen} = useSelector(state => state.navbar)
  return (
    <aside className={`h-screen fixed top-0 bg-slate-100 w-full transition duration-500	${isOpen ? 'translate-x-0 z-50' : '-translate-x-full -z-50'}`}>
        <div className='flex items-center justify-between'>
          <Link href="/">
            <a>
              <img src='/logo.svg' alt="logo"/>  
            </a>
          </Link>
          <button className="mr-5 text-4xl text-red-700 font-semibold" onClick={() => dispatch(closeNav())}>x</button>
        </div>
        <ul>
          {links.map(link => {
            const {id, text, url} = link;
            return (
              <Link href={url} key={id}>
                <li className=' hover:bg-slate-500 hover:text-slate-100' onClick={() => dispatch(closeNav())}>
                  <a className="block py-4 px-6">
                    {text}
                  </a>
                </li>
              </Link>
            )
          })}
        </ul>
        <div className="flex justify-center text-center mt-5">
          <Link href="/cart">
            <a className="px-5 inline-block text-center" onClick={() => dispatch(closeNav())}>
              <AiOutlineShoppingCart />
              cart
            </a>
          </Link>
          <Link href="/login">
            <a className="px-5 inline-block text-center" onClick={() => dispatch(closeNav())}>
              <AiOutlineShoppingCart />
              login
            </a>
          </Link>
        </div>
    </aside>
  ) 
}

export default Sidebar