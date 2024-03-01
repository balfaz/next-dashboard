import React from 'react'
import { Metadata } from 'next';
import { CartCounter } from '@/app/components/shopping-cart/components';

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Seo Description", 
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Cart products</span>
      <CartCounter value={20}/>      
    </div>
  )
}
