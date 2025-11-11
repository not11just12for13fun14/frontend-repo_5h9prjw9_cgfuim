import { motion } from 'framer-motion'

export default function BackgroundFX(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Carbon grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0),_#000000_70%)]" />

      {/* Radial ambient aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full blur-3xl opacity-30" style={{
        background:
          'radial-gradient(circle, rgba(0,255,140,0.35) 0%, rgba(0,255,140,0.08) 40%, transparent 60%)'
      }} />

      {/* Floating neon blobs */}
      <FloatingBlob className="-left-20 -top-20" color="#00FF8C" delay={0} />
      <FloatingBlob className="-right-24 top-1/3" color="#00E6FF" delay={2} />
      <FloatingBlob className="left-1/4 -bottom-24" color="#A78BFA" delay={1} />
    </div>
  )
}

function FloatingBlob({ className = '', color = '#00FF8C', delay = 0 }){
  return (
    <motion.div
      initial={{ y: 0, x: 0, opacity: 0.6 }}
      animate={{ y: [0, -20, 0, 12, 0], x: [0, 10, -6, 0], opacity: [0.6, 0.75, 0.6] }}
      transition={{ duration: 16, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute h-80 w-80 md:h-96 md:w-96 rounded-full blur-3xl`} 
      style={{ background: `radial-gradient(circle at 30% 30%, ${color}55, transparent 60%)` }}
    />
  )
}
