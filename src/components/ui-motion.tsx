import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

const revealProps = (delay: number, className: string) => ({
  className,
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  /* Negatif rootMargin mobilde (IO + adres çubuğu) çoğu bölümü hiç görünür saymıyordu */
  viewport: { once: true, amount: 'some' as const, margin: '0px' as const },
  transition: { duration: 0.55, delay, ease: easeOut },
})

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  /** true: animasyon yok — hero altı gibi hemen görünür alanda boşluk hissi olmasın */
  instant = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section'
  instant?: boolean
}) {
  if (instant) {
    return as === 'section' ? (
      <section className={className}>{children}</section>
    ) : (
      <div className={className}>{children}</div>
    )
  }
  const p = revealProps(delay, className)
  return as === 'section' ? (
    <motion.section {...p}>{children}</motion.section>
  ) : (
    <motion.div {...p}>{children}</motion.div>
  )
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
}

export function StaggerGrid({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some', margin: '0px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  /** Sayfa içi menü / #anchor kaydırma */
  id?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem} id={id}>
      {children}
    </motion.div>
  )
}
