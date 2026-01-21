'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'
import 'swiper/css'
import ProductCard from '../product/ProductCard'
import { Product } from '../../types';

interface Props {
  products: Product[]
}

export default function SliderProduct({ products }: Props ) {

  if (products.length === 0) return (
    <div className='flex w-full justify-center items-center py-10'>
      <p className='text-center'>Não há produtos disponíveis</p>
    </div>
  );

  return (
    <section className='flex w-full pb-10'>
        <Swiper 
          key={products.length}
          modules={[Navigation, Pagination]}
          navigation
          observer={true}
          pagination={{ clickable: true }}
          slidesPerView={ products.length < 2 ? products.length : 2 }
          spaceBetween={10}
          breakpoints={{
            769: {
              slidesPerView: products.length < 3 ? products.length : 3,
              spaceBetween: 15,
            },
            1025: {
              slidesPerView: products.length < 6 ? products.length : 6,
              spaceBetween: 10,
            },
          }}
        >
            {products.map(product => (
                <SwiperSlide>
                    <ProductCard key={product.id} product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}
