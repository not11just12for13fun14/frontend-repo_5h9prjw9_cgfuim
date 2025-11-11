import SectionHeader from '../components/SectionHeader'

const logos = [
  'Cloudflare','NVIDIA','Fraunhofer HHI','Dolby','Adobe','Akamai','Bitmovin','CoreWeave','Energy Web Foundation','Polygon','Siemens Energy','Vestas','BBC R&D','Brightcove','Tata Group'
]

export default function Partners(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Allies" title="Partners in decarbonization" subtitle="We collaborate with leaders in media, cloud, and clean energy." />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((name,i)=>(
            <div key={i} className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0">
              <div className="aspect-video w-full relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center text-zinc-200 hover:text-white hover:border-[#00FF8C] hover:shadow-[0_0_25px_#00FF8C44] transition">
                <span className="px-3 text-center" style={{fontFamily:'Space Grotesk'}}>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
