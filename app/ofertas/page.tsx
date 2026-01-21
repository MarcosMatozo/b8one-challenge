import TopBanner from './components/banners/TopBanner'
import Image from 'next/image'
import { Product } from './types'
import ProductsClient from './components/product/ProductsClient'
import type { Metadata } from 'next'
import { ProductListSchema } from './components/seo/ProductListSchema'

// Define the metadata for the page
export const metadata: Metadata = {
  title: 'Ofertas da Semana',
  description: 'Confira as melhores ofertas da semana em eletrônicos, moda e acessórios.',
}

export const runtime = 'nodejs'

/**
 * @param category url query param
 * @returns List of products from the fake store API
 */
async function getProducts(category?: string): Promise<Product[]> {

  const url = 'https://fakestoreapi.com/products';

    try{
      const res = await fetch( url, {
        next: { revalidate: 60 }
      })
      if (!res.ok) {
        throw new Error('Erro ao buscar produtos... Tente novamente mais tarde.')
      }
    
      return res.json()
    } catch (error) {
      console.error(error)
      return []
    }

}

/**
 * @returns React component for the 'Ofertas' page
 */
export default async function OfertasPage() {

  const products = await getProducts();
  
  // If the products array is empty, return an error message
  if(Array.isArray(products) && products.length === 0) {
    return <main className='flex flex-wrap w-full h-dvh max-w-300 m-auto justify-center items-center px-4 font-roboto-condensed'>Erro ao buscar produtos</main>
  }


  return (
    <main className='flex flex-wrap w-full font-roboto-condensed'>
     
     <TopBanner />

      <section className="main-section w-full max-w-400 m-auto px-4 ">
        <h1 className='justify-center w-full flex py-4 font-roboto-cond text-2xl'>Ofertas da Semana 
          <Image 
            src="/offer-svgrepo-com.svg"
            alt="Ofertas"
            width={20}
            height={20}
            className='ml-2'
          />
        </h1>

        <ProductsClient products={products} />
        
      </section>

      <ProductListSchema products={products} />

    </main>
  )
}
