import React from 'react'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import Loading from '../components/Loading'
import EmptyState from '../components/EmptyState'

export default function Products(){
  const { filtered } = useShop()
  if (!filtered) return <Loading />
  return (
    <div className="container">
      <div className="controls">
        <div className="left">
          <h2>Shop</h2>
          <div className="small-muted">{filtered.length} products</div>
        </div>
        <div className="right">
          <Filters />
        </div>
      </div>

      {filtered.length===0? <EmptyState title="No products match" subtitle="Try different filters or clear search." /> : (
        <section className="product-grid">
          {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
        </section>
      )}
    </div>
  )
}
