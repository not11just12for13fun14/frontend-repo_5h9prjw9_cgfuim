import { motion } from 'framer-motion'

const logos = [
  'Cloudflare','NVIDIA','Fraunhofer HHI','Dolby','Adobe','Akamai','Bitmovin','CoreWeave','Energy Web Foundation','Polygon','Siemens Energy','Vestas','BBC R&D','Brightcove','Tata Group'
]

export default function Partners(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Partners</motion.h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">We collaborate with leaders in media, cloud, and clean energy.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((name,i)=>(
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 hover:text-white hover:border-[#00FF8C] hover:shadow-[0_0_25px_#00FF8C44] transition">
              <span className="px-3 text-center" style={{fontFamily:'Space Grotesk'}}>{name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
