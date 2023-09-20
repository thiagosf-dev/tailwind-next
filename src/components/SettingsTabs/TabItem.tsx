'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  isSelected?: boolean
  title: string
  value: string
}

export function TabItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-700"
          layoutId="activeTab"
        />
      )}
    </Tabs.Trigger>
  )
}
