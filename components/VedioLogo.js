import React from 'react'

export const VedioLogo = () => {
  return (
    <video autoPlay muted loop style={{ width: '60px' }}>
            <source src="/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
  )
}
