import React from 'react'
import { useShop } from '../context/ShopContext'

export default function Filters(){
  const { products, filters, setFilters } = useShop()
  const categories = ['All', ...Array.from(new Set(products.map(p=>p.category)))]
  return (
    <div style={{display:'flex',gap:12,alignItems:'center'}}>
      <select aria-label="Category" value={filters.category} onChange={(e)=>setFilters({...filters,category:e.target.value})}>
        {categories.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>
      <select aria-label="Sort" value={filters.sort} onChange={(e)=>setFilters({...filters,sort:e.target.value})}>
        <option value="featured">Featured</option>
        <option value="new">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}
