import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight"
            style={{fontFamily:'Space Grotesk'}}
          >
            The World’s First Carbon-Neutral Streaming & Cloud Ecosystem.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-zinc-300"
          >
            AI-powered, renewable-driven, and verified on-chain. Experience performance without the footprint.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link to="/streaming" className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full text-black font-medium">
                <span className="absolute inset-0 rounded-full bg-[#00FF8C] blur-sm opacity-80 group-hover:opacity-100 transition" />
                <span className="relative z-10">Start Streaming</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/contact" className="px-6 py-3 rounded-full ring-1 ring-white/20 text-white hover:ring-[#00FF8C] transition">
                Partner With Us
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Magnetic({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="[filter:drop-shadow(0_0_20px_#00FF8C55)]"
    >
      {children}
    </motion.div>
  )
}
