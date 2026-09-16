import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
        <div>
          <div style={{fontWeight:800,fontSize:20}}>VELORA</div>
          <div className="small-muted" style={{marginTop:8}}>Fine goods, responsibly made.</div>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:8}}>SHOP</div>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <li><Link to="/products">New Arrivals</Link></li>
            <li><Link to="/products">Clothing</Link></li>
            <li><Link to="/products">Accessories</Link></li>
            <li><Link to="/products">Home & Lifestyle</Link></li>
          </ul>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:8}}>CUSTOMER CARE</div>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:8}}>ABOUT</div>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <li><Link to="/about">Our Story</Link></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
          <div style={{marginTop:12}}>
            <div style={{fontWeight:700,marginBottom:8}}>Newsletter</div>
            <div style={{display:'flex',gap:8}}>
              <input placeholder="Email" style={{padding:8,borderRadius:8,border:'1px solid rgba(16,24,40,0.06)'}} />
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div style={{gridColumn:'1 / -1',marginTop:12,borderTop:'1px solid rgba(16,24,40,0.04)',paddingTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="small-muted">© {new Date().getFullYear()} VELORA — All rights reserved</div>
          <div style={{display:'flex',gap:12}}>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
