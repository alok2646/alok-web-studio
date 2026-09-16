import React, { useState, useEffect } from 'react'
export default function Contact(){
  const [sent,setSent] = useState(false)
  useEffect(()=>{document.title='Contact — VELORA'},[])
  const submit=(e)=>{e.preventDefault();setSent(true)}
  return (
    <div className="container">
      <h2>Contact</h2>
      <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 320px',gap:18}}>
        <form onSubmit={submit} style={{background:'#fff',padding:18,borderRadius:12}}>
          <label className="small-muted">Your email</label>
          <input required style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
          <label className="small-muted" style={{marginTop:12,display:'block'}}>Message</label>
          <textarea required style={{width:'100%',padding:10,borderRadius:8,marginTop:8}} />
          <div style={{marginTop:12}}>
            <button className="button" type="submit">Send message</button>
          </div>
        </form>
        <aside style={{alignSelf:'start'}}>
          <div style={{background:'#fff',padding:18,borderRadius:12}}>
            <div className="small-muted">Customer care</div>
            <div style={{marginTop:8}}>hello@velora.example</div>
          </div>
        </aside>
      </div>
      {sent && <div style={{marginTop:12}} className="small-muted">Thanks — we will reply soon.</div>}
    </div>
  )
}
