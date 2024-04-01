import React from 'react'

export default function SiteLayout({
    children
}:{
    children: React.ReactNode 
}) {
  return (
  <main className=''>
    {children}
  </main>
  )
}
