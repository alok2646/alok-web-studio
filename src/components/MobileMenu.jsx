import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({open,onClose,wishlistCount}){
  const ref = useRef()
  useEffect(()=>{
    function onKey(e){
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown',onKey)
    return ()=>document.removeEventListener('keydown',onKey)
  },[open,onClose])

  useEffect(()=>{
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  },[open])

  return (
    <div id="mobile-menu" className={`mobile-menu ${open? 'open':''}`} aria-hidden={!open} ref={ref}>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link to="/products" onClick={onClose}>Shop</Link>
        <Link to="/collections" onClick={onClose}>Collections</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
        <Link to="/wishlist" onClick={onClose}>Wishlist ({wishlistCount})</Link>
        <Link to="/cart" onClick={onClose}>Cart</Link>
      </nav>
    </div>
  )
}
