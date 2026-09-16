import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const { products } = useShop()
  const bestSellers = products.slice(0, 4)
  const newArrivals = products.slice(4, 8)
  return (
    <div className="container">
      <Hero />

      <section className="trust-strip" aria-hidden>
        <div className="trust-grid">
          <div>Free shipping over $75</div>
          <div>Secure checkout</div>
          <div>Easy returns</div>
          <div>Quality guarantee</div>
        </div>
      </section>

      <section className="featured-collections">
        <div className="section-header">
          <h2>Featured collections</h2>
        </div>
        <div className="collections-grid">
          <Link to="/products" className="collection-card" style={{backgroundImage:"url('/images/collection-new.jpg')"}}>
            <div className="overlay"><span>New Arrivals</span><small>Fresh seasonal picks</small></div>
          </Link>
          <Link to="/products" className="collection-card" style={{backgroundImage:"url('/images/collection-clothing.jpg')"}}>
            <div className="overlay"><span>Clothing</span><small>Minimal layers</small></div>
          </Link>
          <Link to="/products" className="collection-card" style={{backgroundImage:"url('/images/collection-accessories.jpg')"}}>
            <div className="overlay"><span>Accessories</span><small>Everyday accents</small></div>
          </Link>
          <Link to="/products" className="collection-card" style={{backgroundImage:"url('/images/collection-home.jpg')"}}>
            <div className="overlay"><span>Home & Lifestyle</span><small>Curated living</small></div>
          </Link>
        </div>
      </section>

      <section>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2>Best sellers</h2>
          <Link to="/products" className="small-muted">View all</Link>
        </div>
        <div className="best-grid" style={{marginTop:12}}>
          {bestSellers.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="promo-editorial">
        <div className="promo">
          <div className="promo-text">
            <h2>Everyday essentials. Elevated.</h2>
            <p className="small-muted">Thoughtfully designed pieces for daily life — minimal, durable, and beautiful.</p>
            <Link to="/products" className="button">Shop the edit</Link>
          </div>
          <div className="promo-image" style={{backgroundImage:"url('/images/hero.jpg')"}} />
        </div>
      </section>

      <section>
        <h2>New arrivals</h2>
        <div className="new-grid" style={{marginTop:12}}>
          {newArrivals.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="brand-story">
        <div className="story-grid">
          <div className="story-image" style={{backgroundImage:"url('/images/collection-home.jpg')"}} />
          <div className="story-text">
            <h2>Our philosophy</h2>
            <p className="small-muted">VELORA curates modern essentials made with care. We partner with artisans and ethical manufacturers to ensure quality and transparency.</p>
          </div>
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>What customers say</h2>
        <div className="reviews-grid" style={{marginTop:12,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          <div className="review-card">
            <div className="rating">★★★★★</div>
            <div className="small-muted">"Beautiful quality. I wear the linen shirt weekly." — Anna</div>
            <div className="muted">Purchased: Linen Summer Shirt</div>
          </div>
          <div className="review-card">
            <div className="rating">★★★★☆</div>
            <div className="small-muted">"The vase is a centerpiece in my living room." — Marco</div>
            <div className="muted">Purchased: Handcrafted Ceramic Vase</div>
          </div>
          <div className="review-card">
            <div className="rating">★★★★★</div>
            <div className="small-muted">"Love the wallet — minimal and solid." — Priya</div>
            <div className="muted">Purchased: Minimal Leather Wallet</div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div style={{background:'#fff',padding:18,borderRadius:12,display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div>
            <h3 style={{margin:0}}>Join our newsletter</h3>
            <div className="small-muted">Be the first to hear about new arrivals and exclusive offers.</div>
          </div>
          <div style={{display:'flex',gap:8}}>
            <input placeholder="Enter your email" style={{padding:10,borderRadius:8,border:'1px solid rgba(16,24,40,0.06)'}} />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  )
}
