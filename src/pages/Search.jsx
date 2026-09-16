import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'

export default function Search(){
  const [q] = useSearchParams()
  const query = q.get('q') || ''
  const { products } = useShop()
  const results = products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
  useEffect(()=>{document.title = query? `Search: ${query} — VELORA` : 'Search — VELORA'},[query])
  return (
    <div className="container">
      <h2>Search {query? `results for "${query}"` : ''}</h2>
      {results.length===0? <div style={{marginTop:12}} className="small-muted">No results</div> : (
        <div style={{marginTop:12,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          {results.map(r=> <ProductCard key={r.id} product={r} />)}
        </div>
      )}
    </div>
  )
}
