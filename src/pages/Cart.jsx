import React from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import ImageWithFallback from '../components/ImageWithFallback'

export default function Cart(){
  const { cart, updateQty, removeFromCart, clearCart } = useShop()
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)
  return (
    <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:28}}>
      <section>
        <h2>Your cart</h2>
        {cart.length===0? (
          <div style={{marginTop:20}}>
            <div style={{background:'#fff',padding:24,borderRadius:12}}>
              <h3 style={{margin:0}}>Your cart is empty</h3>
              <p className="small-muted">Explore the shop and add items you love.</p>
              <Link to="/products" className="button" style={{marginTop:12,display:'inline-block'}}>Shop products</Link>
            </div>
          </div>
        ) : (
          <div style={{marginTop:12}}>
            <div className="cart-list">
              {cart.map(item=> (
                <div key={item.id} className="cart-item">
                  <ImageWithFallback src={item.images?.[0]} alt={item.title} style={{width:84,height:84,borderRadius:8}} />
                  <div style={{flex:1,textAlign:'left'}}>
                    <div style={{fontWeight:700}}>{item.title}</div>
                    <div className="small-muted">${item.price} — {item.category}</div>
                    <div style={{marginTop:8,display:'flex',gap:8,alignItems:'center'}}>
                      <select value={item.qty} onChange={(e)=>updateQty(item.id,Number(e.target.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                      <button className="small" onClick={()=>removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                  <div style={{fontWeight:700}}>${(item.price*item.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:18}}>
              <button className="small" onClick={clearCart}>Clear cart</button>
            </div>
          </div>
        )}
      </section>
      <aside>
        <div className="cart-summary">
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div className="small-muted">Subtotal</div>
            <div style={{fontWeight:700}}>${total.toFixed(2)}</div>
          </div>
          <div style={{marginTop:12}}>
            <Link to="/checkout" className="button" style={{width:'100%'}}>Proceed to checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
