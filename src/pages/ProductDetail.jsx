import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import ImageWithFallback from '../components/ImageWithFallback'

export default function ProductDetail(){
  const { id } = useParams()
  const { products, addToCart, toggleWishlist } = useShop()
  const product = products.find(p=>String(p.id)===id)
  if (!product) return <div style={{padding:40}}>Product not found</div>
  // gallery state
  const [idx,setIdx] = React.useState(0)
  const [qty,setQty] = React.useState(1)
  const thumbs = product.images || [product.image]

  React.useEffect(()=>{document.title = `${product.title} — VELORA`},[product.title])

  return (
    <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:28}}>
      <div style={{background:'#fff',borderRadius:12,padding:18}}>
        <div className="gallery">
          <div className="main-img">
              <div style={{borderRadius:8,overflow:'hidden'}}>
                <ImageWithFallback src={thumbs[idx]} alt={`${product.title} image ${idx+1}`} style={{width:'100%',height:420,objectFit:'cover'}} />
              </div>
            </div>
            <div className="thumbs" role="tablist">
              {thumbs.map((t,i)=> (
                <button key={i} className={`thumb ${i===idx? 'active':''}`} onClick={()=>setIdx(i)} aria-label={`Show image ${i+1}`}>
                  <ImageWithFallback src={t} alt={`${product.title} thumbnail ${i+1}`} style={{width:84,height:64,objectFit:'cover',borderRadius:6}} />
                </button>
              ))}
            </div>
        </div>
        <h2 style={{marginTop:16}}>{product.title}</h2>
        <div className="small-muted">{product.category}</div>
        <p style={{marginTop:12,color:'#444'}}>{product.description}</p>

        <section style={{marginTop:18}}>
          <h3 style={{margin:0}}>Reviews</h3>
          <div className="small-muted" style={{marginTop:8}}>Rated 4.6 — based on 120 reviews (sample)</div>
        </section>
      </div>
      <aside style={{position:'relative'}}>
        <div style={{background:'#fff',padding:18,borderRadius:12}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{fontSize:22,fontWeight:700}}>${product.price}</div>
            <div className="small-muted">In stock</div>
          </div>

          <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <div>
              <label className="small-muted">Color</label>
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <button className="small">Natural</button>
                <button className="small">Black</button>
              </div>
            </div>
            <div>
              <label className="small-muted">Size</label>
              <select style={{width:'100%',marginTop:8,padding:10,borderRadius:8}} defaultValue="M">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <label className="small-muted">Quantity</label>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button className="small" onClick={()=>setQty((q)=>Math.max(1,q-1))}>-</button>
              <div style={{padding:'8px 12px',background:'#f7f5f3',borderRadius:8}}>{qty}</div>
              <button className="small" onClick={()=>setQty((q)=>q+1)}>+</button>
            </div>
          </div>

          <div style={{marginTop:12,display:'flex',gap:10}}>
            <button className="button" onClick={()=>addToCart(product, qty)}>Add to cart</button>
            <button className="button secondary" onClick={()=>toggleWishlist(product)}>Save</button>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <h4 style={{margin:0}}>Related products</h4>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
            {products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,2).map(p=> (
              <div key={p.id} style={{background:'#fff',padding:8,borderRadius:8}}>
                <img src={p.image} alt={p.title} style={{width:'100%',height:80,objectFit:'cover',borderRadius:6}} />
                <div style={{fontWeight:700,fontSize:13,marginTop:6}}>{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
