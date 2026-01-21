'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Product } from '../../types'

/**
 * 
 * @title Component to filter products by category
 * @param products List of products
 * @returns Component with a select input to filter products by category
 */
export default function ProductListCategoryFilter({ products }: { products: Product[] }) {
  
  const searchParams = useSearchParams()
  const router = useRouter()

  /**
   * @description Handles the category change
   * @param category String to filter the catalog
   */
  function handleCategoryChange(category?: string) {
    const params = new URLSearchParams(searchParams)
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const category = searchParams.get('category')
  const availableCategories = Array.from(
    new Set(products.map(p => p.category))
  )
    
  return (
    <>
      <div className='flex flex-wrap border border-gray-200 p-2 rounded cursor-pointer'>
        <div className="flex">
          <select name="categ-filter cursor-pointer" id="" value={category ?? ''}

            onChange={(e) =>
              handleCategoryChange(e.target.value || undefined)
            }
          >
            <option className='capitalize' value={''} >Todas as categorias</option>
            {availableCategories.map(cat => (
              <option key={cat} onClick={() => handleCategoryChange(cat)} value={cat}
              className=' capitalize '>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

      </div>
    </div>
    </>
  )
}