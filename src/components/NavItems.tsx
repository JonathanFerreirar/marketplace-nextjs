'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import NavItem from './NavItem'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '@/hooks/use-on-clik-outside'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }
        const isOpen = i === activeIndex
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems
