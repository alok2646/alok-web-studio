import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import { ShoppingCart, Heart, Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Navbar(){
  const { cart, setSearch, wishlist } = useShop()
  const totalItems = cart.reduce((s,i)=>s+i.qty,0)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = ()=>setOpen((v)=>!v)
  const searchRef = useRef()

  useEffect(()=>{
    if (!open) return
    // focus first link in mobile menu after open
    const el = document.querySelector('.mobile-menu a')
    if (el) el.focus()
  },[open])

  useEffect(()=>{
    function onScroll(){ setScrolled(window.scrollY>20) }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`navbar ${scrolled? 'scrolled':''}`}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <button className="mobile-toggle" onClick={toggle} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">
          {open? <X size={18} /> : <Menu size={18} />}
        </button>
        <div className="brand"><Link to="/" style={{color:'inherit',textDecoration:'none'}}>VELORA</Link></div>
      </div>

      <nav className="navlinks" aria-label="Main navigation">
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-actions">
        <input className="search" placeholder="Search products" onChange={(e)=>setSearch(e.target.value)} aria-label="Search products" ref={searchRef} />
        <Link to="/wishlist" aria-label="Wishlist" className="icon-link"><Heart size={18} /><span className="visually-hidden">Wishlist</span></Link>
        <Link to="/cart" aria-label="Cart" className="icon-link"><ShoppingCart size={18} /> <span className="cart-count" aria-hidden>{totalItems>0?totalItems:null}</span></Link>
        <div className="mobile-spacer" />
      </div>

      <MobileMenu open={open} onClose={()=>setOpen(false)} wishlistCount={wishlist.length} />
    </header>
  )
}
