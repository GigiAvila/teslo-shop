import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector
} from '@/components'

import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'
import { titleFont } from '@/config/fonts'

interface Props {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params
  const product = initialData.products.find((product) => product.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className='mt-5 mb-20 grid md:grid-cols-3 gap-3 '>
      {/* Slideshow */}
      <div className='col-span-1 md:col-span-2 '>
        {/* Desktop Slideshow */}
        <ProductSlideshow
          title=''
          images={product.images}
          className='hidden md:block'
        />

        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title=''
          images={product.images}
          className='block md:hidden'
        />
      </div>

      {/* Detalles */}
      <div className='col-span-1 px-5 '>
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className='text-lg mb-5'>{product.price}</p>

        {/* Selector de talla */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />
        {/* button */}
        <button className='btn-primary my-5'>Agregar al carrito</button>

        {/* Descripcion */}

        <h3 className='font-bold text-sm'>Descripción</h3>
        <p className='font-light'>{product.description}</p>
      </div>
    </div>
  )
}
