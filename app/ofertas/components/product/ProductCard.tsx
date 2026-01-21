'use client'

import { Product } from "../../types"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props ) {
  return (
    <article className="card flex flex-wrap h-full group p-2.5 border rounded-sm border-gray-200">
      <div className="h-50 flex justify-center w-full transition-all duration-300 group-hover:scale-105">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="flex w-full flex-wrap flex-col justify-center pt-4 font-light text-base space-y-2">
        <h2 className="text-left line-clamp-2 min-h-12 ">{product.title}</h2>
        <p className="text-left font-light line-through mb-0 text-sm text-gray-600">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((product.price * 1.10))}</p>
        <p className="text-left font-bold text-2xl text-green-800">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
        <button className="text-center p-2 bg-[rgb(63,135,96)] rounded-xs text-white mt-auto text-lg font-normal cursor-pointer
          transition-all duration-300 hover:bg-green-800 hover:scale-105
        ">Comprar</button>
      </div>
    </article>
  )
}
