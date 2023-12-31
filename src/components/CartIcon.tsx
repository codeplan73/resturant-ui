import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 m:w-4 md:h-5">
        <Image src="/cart.png" alt="cart" fill className="" />
      </div>
      <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon
