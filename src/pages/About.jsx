import React, { useEffect } from 'react'
export default function About(){
  useEffect(()=>{document.title = 'About — VELORA'},[])
  return (
    <div className="container">
      <h2>About VELORA</h2>
      <div style={{marginTop:12,background:'#fff',padding:20,borderRadius:12}}>
        <p className="small-muted">VELORA is a curated shop focused on beautifully made essentials. We prioritize materials, craft, and timeless design.</p>
      </div>
    </div>
  )
}
