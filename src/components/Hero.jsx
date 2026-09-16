import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="hero container hero-editorial" aria-labelledby="hero-title">
      <div className="left">
        <h1 id="hero-title">Everyday essentials. Elevated.</h1>
        <p>Discover curated collections of wardrobe and home goods crafted for longevity and quiet luxury.</p>
        <div className="cta">
          <Link to="/products" className="button">Shop collection</Link>
          <Link to="/collections" className="button secondary">Explore new arrivals</Link>
        </div>
      </div>
      <div className="right" aria-hidden>
        <div className="hero-image-wrap">
          <img src="/images/hero.jpg" alt="Premium lifestyle editorial" />
        </div>
      </div>
    </section>
  )
}
