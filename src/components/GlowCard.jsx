import { motion } from 'framer-motion'

export default function GlowCard({ title, desc, children, delay = 0 }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0"
    >
      <div className="relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute -inset-40 bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(0,255,140,0.18),_transparent_30%)] blur-2xl" />
        <div className="relative p-6">
          {title && <h3 className="text-xl font-medium" style={{fontFamily:'Space Grotesk'}}>{title}</h3>}
          {desc && <p className="mt-2 text-zinc-300">{desc}</p>}
          {children}
        </div>
      </div>
    </motion.div>
  )
}
