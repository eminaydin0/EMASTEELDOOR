import { motion } from 'framer-motion'

export function FusionTitle({
  children,
  as = 'h2',
  center,
}: {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  center?: boolean
}) {
  const Tag = as
  return (
    <div className={`ev-fusion-title ${center ? 'ev-fusion-title--center' : ''}`}>
      <Tag className="ev-fusion-title__heading">{children}</Tag>
      <span className="ev-fusion-title__spacer" aria-hidden="true" />
      <motion.div
        className="ev-fusion-title__sep ev-fusion-title__sep--motion"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 'some', margin: '0px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: center ? 'center' : 'left' }}
      />
    </div>
  )
}
