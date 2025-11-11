import SectionHeader from '../components/SectionHeader'

export default function Contact(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Contact" title="Let’s build a cleaner internet" subtitle="Reach out for partnerships, media, or enterprise solutions." />

        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Info label="General" value="contact@zero-carbon.global" />
            <Info label="Partnerships" value="partnerships@zero-carbon.global" />
            <Info label="Support" value="support@zero-carbon.global" />
          </div>
          <div className="rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <iframe title="map" src="https://www.google.com/maps?q=Rudolfplatz%207,%2050674%20K%C3%B6ln,%20Germany&output=embed" className="w-full h-80 md:h-full"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Info({label, value}){
  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0">
      <div className="relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden p-5">
        <div className="text-zinc-400 text-sm">{label}</div>
        <div className="mt-1 text-lg" style={{fontFamily:'Space Grotesk'}}>{value}</div>
      </div>
    </div>
  )
}
