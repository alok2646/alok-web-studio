import React, { createContext, useContext, useEffect, useState } from 'react'
import sampleProducts from '../data/products'

const ShopContext = createContext()

export function ShopProvider({ children }) {
  const [products] = useState(sampleProducts)
  const [filtered, setFiltered] = useState(sampleProducts)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ category: 'All', sort: 'featured', priceRange: [0, 1000] })
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('velora_cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [wishlist, setWishlist] = useState(() => {
    try {
      const raw = localStorage.getItem('velora_wishlist')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('velora_cart', JSON.stringify(cart))
  }, [cart])
  useEffect(() => {
    localStorage.setItem('velora_wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    // simple filtering and searching
    let out = products.slice()
    if (filters.category && filters.category !== 'All') {
      out = out.filter((p) => p.category === filters.category)
    }
    if (search) {
      const s = search.toLowerCase()
      out = out.filter((p) => p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s))
    }
    const [minP, maxP] = filters.priceRange || [0, 1000]
    out = out.filter((p) => p.price >= minP && p.price <= maxP)
    if (filters.sort === 'price-asc') out = out.sort((a, b) => a.price - b.price)
    if (filters.sort === 'price-desc') out = out.sort((a, b) => b.price - a.price)
    if (filters.sort === 'new') out = out.sort((a, b) => b.id - a.id)
    setFiltered(out)
  }, [products, filters, search])

  const addToCart = (product, qty = 1) => {
    setCart((c) => {
      const found = c.find((i) => i.id === product.id)
      if (found) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      return [...c, { ...product, qty }]
    })
  }
  const updateQty = (id, qty) => {
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)))
  }
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id))
  const clearCart = () => setCart([])

  const toggleWishlist = (product) => {
    setWishlist((w) => (w.find((i) => i.id === product.id) ? w.filter((i) => i.id !== product.id) : [...w, product]))
  }

  const removeWishlistItem = (id) => setWishlist((w) => w.filter((i) => i.id !== id))
  const moveToCart = (product) => {
    addToCart(product, 1)
    removeWishlistItem(product.id)
  }

  const value = {
    products,
    filtered,
    search,
    setSearch,
    filters,
    setFilters,
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    wishlist,
    toggleWishlist,
    removeWishlistItem,
    moveToCart,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  return useContext(ShopContext)
}
