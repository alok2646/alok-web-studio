import React from 'react'

const FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%23f3efe9'/><stop offset='1' stop-color='%23ece5de'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><circle cx='400' cy='240' r='90' fill='%23d7c7b5'/><rect x='270' y='350' width='260' height='120' rx='18' fill='%23d7c7b5'/></svg>`

export default function ImageWithFallback({src,alt,className,style,children}){
  const [okSrc, setOkSrc] = React.useState(src || FALLBACK_SVG)
  React.useEffect(()=>{setOkSrc(src || FALLBACK_SVG)},[src])
  const onError = ()=> setOkSrc(FALLBACK_SVG)
  return (
    <img src={okSrc} onError={onError} alt={alt||''} className={className} style={style} loading="lazy" />
  )
}
