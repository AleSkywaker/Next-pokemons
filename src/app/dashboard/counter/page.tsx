

import { CartCounter } from '@/shopping-cart/components/CartCounter';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Contador carrito de compras",
};

export default function Counterpage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito de compras</span>
      <CartCounter value={20} />
    </div>
  )
}
