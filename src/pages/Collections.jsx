import React, { useEffect } from 'react'
import { useShop } from '../context/ShopContext'
import { Link } from 'react-router-dom'

export default function Collections(){
  const { products } = useShop()
  useEffect(()=>{document.title = 'Collections — VELORA'},[])
  const cats = Array.from(new Set(products.map(p=>p.category)))
  return (
    <div className="container">
      <h2>Collections</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,marginTop:16}}>
        {cats.map(cat=> (
          <Link key={cat} to={`/products`} style={{textDecoration:'none'}}>
            <div style={{background:'#fff',padding:18,borderRadius:12,display:'flex',flexDirection:'column',gap:8}}>
              <div style={{fontWeight:700}}>{cat}</div>
              <div className="small-muted">Browse our {cat.toLowerCase()} collection</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
