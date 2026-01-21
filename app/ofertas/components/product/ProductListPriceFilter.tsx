'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Product } from '../../types'

export default function ProductListPriceFilter({
  products,
}: {
  products: Product[]
}) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const price = searchParams.get('price')

  function handlePriceChange(value?: string) {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('price', value)
    } else {
      params.delete('price')
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const priceRanges = [
    { label: 'Todos os preços', value: '' },
    { label: 'Até R$ 50', value: '0-50' },
    { label: 'R$ 50 a R$ 100', value: '50-100' },
    { label: 'R$ 100 a R$ 200', value: '100-200' },
    { label: 'Acima de R$ 200', value: '200+' },
  ]

  return (
 
      <select
        className="border border-gray-200 p-2 rounded cursor-pointer"
        value={price ?? ''}
        onChange={(e) =>
          handlePriceChange(e.target.value || undefined)
        }
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
  )
}
