'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product } from '../../types'
import ProductListCategoryFilter from './ProductListCategoryFilter'
import ProductListPriceFilter from './ProductListPriceFilter'
import SliderProduct from '../sliders/SliderProduct'


/**
 * @param products List of products
 * @returns Top Leven component with the products list and filters
 */
export default function ProductsClient({ products }: { products: Product[] }) {

  const searchParams = useSearchParams(),
        category = searchParams.get('category'),
        price = searchParams.get('price')


  /**
   * @description Filters the products by category and price
   */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category
        ? product.category === category
        : true
      const matchPrice = filterByPrice(product, price)

      return matchCategory && matchPrice
    })
  }, [products, category, price])

  return (
    <>
      
      <form className='flex w-full justify-between items-center pb-6'
         onSubmit={(e) => e.preventDefault()}>
            <fieldset className="flex gap-4 ">
                <ProductListCategoryFilter products={products} />
                <ProductListPriceFilter products={products} />
            </fieldset>
      </form>

      <section className="flex flex-wrap w-full m-auto">
        <SliderProduct products={filteredProducts} />
      </section>
    </>
  )
}

/**
 * @param product List of products
 * @param price Price range filter. Ex: '0-50'
 * @returns Products filtered by price range
 */
function filterByPrice(product: Product, price?: string | null) {
  if (!price) return true

  if (price === '200+') {
    return product.price >= 200
  }

  // Split the price range into min and max values using destructuring
  const [min, max] = price.split('-').map(Number)

  return product.price >= min && product.price <= max
}
