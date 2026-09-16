import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useShop } from '../context/ShopContext'
import ImageWithFallback from './ImageWithFallback'

export default function ProductCard({product}){
  const { addToCart, toggleWishlist } = useShop()
  const primary = product.images?.[0]
  const secondary = product.images?.[1] || product.images?.[0]
  return (
    <article className="card" role="article" aria-labelledby={`product-${product.id}`} tabIndex={0}>
      <Link to={`/products/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
        <div className="card-media">
          <div className="media-wrap">
            <ImageWithFallback src={primary} alt={product.title} className="primary-img" />
            {secondary && <ImageWithFallback src={secondary} alt={`${product.title} secondary`} className="secondary-img" />}
          </div>
          {product.originalPrice && product.originalPrice>product.price && (
            <div className="badge">Sale</div>
          )}
        </div>
      </Link>
      <div className="card-body">
        <div className="card-content">
          <div id={`product-${product.id}`} className="title">{product.title}</div>
          <div className="meta">{product.category} • {product.rating} ★ ({product.reviews})</div>
        </div>
        <div className="card-footer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
          <div>
            <div className="price">${product.price}</div>
            {product.originalPrice && product.originalPrice>product.price && <div className="muted"><s>${product.originalPrice}</s></div>}
          </div>
          <div className="card-actions">
            <button className="small" onClick={()=>toggleWishlist(product)} aria-label={`Add ${product.title} to wishlist`}><Heart size={14} /></button>
            <button className="button" onClick={()=>addToCart(product)}>Add</button>
          </div>
        </div>
      </div>
    </article>
  )
}
