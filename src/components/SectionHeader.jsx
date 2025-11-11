import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle }){
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-[#00FF8C] text-xs tracking-widest uppercase">{eyebrow}</motion.div>
      )}
      {title && (
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.05}} className="mt-2 text-2xl md:text-4xl font-semibold text-white" style={{fontFamily:'Space Grotesk'}}>
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}} className="mt-3 text-zinc-300">{subtitle}</motion.p>
      )}
    </div>
  )
}
