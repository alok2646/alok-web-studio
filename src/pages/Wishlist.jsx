import React, { useEffect } from 'react'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'

export default function Wishlist(){
  const { wishlist, moveToCart, removeWishlistItem } = useShop()
  useEffect(()=>{document.title = wishlist.length? `Wishlist — VELORA (${wishlist.length})` : 'Wishlist — VELORA'},[wishlist.length])
  return (
    <div className="container">
      <h2>Your wishlist</h2>
      {wishlist.length===0? (
        <div style={{marginTop:20,background:'#fff',padding:24,borderRadius:12}}>
          <h3 style={{margin:0}}>No favorites yet</h3>
          <p className="small-muted">Add products you love and save them for later.</p>
        </div>
      ) : (
        <div style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          {wishlist.map(item=> (
            <div key={item.id} style={{display:'flex',flexDirection:'column',gap:8}}>
              <ProductCard product={item} />
              <div style={{display:'flex',gap:8,justifyContent:'center'}}>
                <button className="button" onClick={()=>moveToCart(item)}>Move to cart</button>
                <button className="small" onClick={()=>removeWishlistItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
