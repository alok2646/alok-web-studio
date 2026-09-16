import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
export default function OrderSuccess(){
  const { state } = useLocation()
  useEffect(()=>{document.title = 'Order received — VELORA'},[])
  if (!state) return (
    <div className="container">
      <div style={{padding:40,background:'#fff',borderRadius:12}}>
        <h2>Order placed</h2>
        <p className="small-muted">Your order has been placed.</p>
        <Link to="/">Return home</Link>
      </div>
    </div>
  )
  return (
    <div className="container">
      <div style={{padding:40,background:'#fff',borderRadius:12}}>
        <h2>Thank you — order confirmed</h2>
        <p className="small-muted">Order number: <strong>{state.id}</strong></p>
        <p className="small-muted">Total: <strong>${state.total.toFixed(2)}</strong></p>
        <Link to="/">Continue shopping</Link>
      </div>
    </div>
  )
}
