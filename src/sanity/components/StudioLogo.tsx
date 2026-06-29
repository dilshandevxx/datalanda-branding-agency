import React from 'react'

export function StudioLogo(props: any) {
  const { renderDefault, title } = props
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H40V40H0V0Z" fill="white" />
        <path d="M25 10H15V15H20V25H10V30H25V25H20V15H30V10H25Z" fill="#111111" />
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: '2px' }}>SKYLABS STUDIO</span>
    </div>
  )
}
