import React, { useState } from 'react'
import { useShop } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const { cart, clearCart } = useShop()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [zip,setZip] = useState('')
  const [method,setMethod] = useState('card')
  const navigate = useNavigate()
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)
  const submit = (e)=>{
    e.preventDefault()
    // simple validation
    if (!name || !email || !address) return alert('Please complete customer information')
    // simulate order
    const order = { id: `VEL-${Math.random().toString(36).substr(2,9).toUpperCase()}`, total, items: cart.length }
    clearCart()
    navigate('/order-success', { state: order })
  }
  React.useEffect(()=>{document.title='Checkout — VELORA'},[])
  return (
    <div className="container" style={{maxWidth:980,margin:'0 auto'}}>
      <h2>Checkout</h2>
      <form onSubmit={submit} style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:18,marginTop:12}}>
        <div style={{background:'#fff',padding:18,borderRadius:12}}>
          <label className="small-muted">Full name</label>
          <input required value={name} onChange={(e)=>setName(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
          <label className="small-muted" style={{marginTop:12,display:'block'}}>Email</label>
          <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
          <label className="small-muted" style={{marginTop:12,display:'block'}}>Address</label>
          <input required value={address} onChange={(e)=>setAddress(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
          <div style={{display:'flex',gap:8,marginTop:12}}>
            <input required placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} style={{flex:1,padding:10,borderRadius:8}} />
            <input required placeholder="ZIP" value={zip} onChange={(e)=>setZip(e.target.value)} style={{width:120,padding:10,borderRadius:8}} />
          </div>

          <div style={{marginTop:16}}>
            <div className="small-muted">Payment method</div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <label style={{display:'flex',gap:8,alignItems:'center'}}><input type="radio" name="method" value="card" checked={method==='card'} onChange={()=>setMethod('card')} /> Card</label>
              <label style={{display:'flex',gap:8,alignItems:'center'}}><input type="radio" name="method" value="upi" checked={method==='upi'} onChange={()=>setMethod('upi')} /> UPI</label>
              <label style={{display:'flex',gap:8,alignItems:'center'}}><input type="radio" name="method" value="cod" checked={method==='cod'} onChange={()=>setMethod('cod')} /> Cash on Delivery</label>
            </div>

            {method==='card' && (
              <div style={{marginTop:12}}>
                <label className="small-muted">Card number</label>
                <input placeholder="4242 4242 4242 4242" style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
                <div style={{display:'flex',gap:8,marginTop:8}}>
                  <input placeholder="MM/YY" style={{padding:10,borderRadius:8,width:120}} />
                  <input placeholder="CVC" style={{padding:10,borderRadius:8,width:120}} />
                </div>
              </div>
            )}

          </div>

          <div style={{marginTop:16}}>
            <button className="button" type="submit">Place order — ${total.toFixed(2)}</button>
          </div>
        </div>
        <aside>
          <div style={{background:'#fff',padding:18,borderRadius:12}}>
            <div className="small-muted">Order summary</div>
            <div style={{marginTop:12}}>
              {cart.map(it=> (
                <div key={it.id} style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                  <div className="small-muted">{it.title} x{it.qty}</div>
                  <div style={{fontWeight:700}}>${(it.price*it.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <hr />
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:700}}>
              <div>Total</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
        </aside>
      </form>
    </div>
  )
}
