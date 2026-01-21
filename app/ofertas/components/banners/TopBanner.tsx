'use client'

import Image from 'next/image'

export default function TopBanner() {
  return (
    <picture className='w-full'>
      {/* Mobile */}
      <source
        media="(max-width: 780px)"
        srcSet="/banners/ofertas/b3-mobile.jpg"
      />

      {/* Desktop */}
      <Image
        src="/banners/ofertas/b3-desktop.jpg"
        alt="Banner Ofertas"
        width={2500}
        height={800}
        sizes="100vw"
        priority
        className="w-full h-auto"
      />
    </picture>
  )
}
