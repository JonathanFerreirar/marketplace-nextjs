import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({ category, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative fllex items-center">
        <Button className="gap-1.5"></Button>
      </div>
    </div>
  )
}
export default NavItem
