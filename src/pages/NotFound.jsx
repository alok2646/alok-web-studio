import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
  useEffect(()=>{document.title = '404 — VELORA'},[])
  return (
    <div className="container">
      <div style={{padding:40,background:'#fff',borderRadius:12}}>
        <h1 style={{margin:0}}>404</h1>
        <p className="small-muted">We couldn't find that page.</p>
        <Link to="/" className="button" style={{marginTop:12,display:'inline-block'}}>Return home</Link>
      </div>
    </div>
  )
}
