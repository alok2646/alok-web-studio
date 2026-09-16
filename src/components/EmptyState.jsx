import React from 'react'
export default function EmptyState({title='Nothing here',subtitle='Try adjusting your filters or come back later.'}){
  return (
    <div style={{padding:36,display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <div style={{width:88,height:88,borderRadius:20,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 18px rgba(16,24,40,0.06)'}}>—</div>
      <h3 style={{margin:0}}>{title}</h3>
      <div className="small-muted">{subtitle}</div>
    </div>
  )
}
