import React from 'react'
export default function Loading(){
  return (
    <div style={{padding:40,display:'flex',justifyContent:'center'}} aria-busy="true">
      <div style={{width:48,height:48,borderRadius:12,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 18px rgba(16,24,40,0.06)'}}>Loading...</div>
    </div>
  )
}
