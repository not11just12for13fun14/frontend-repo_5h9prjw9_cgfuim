export default function Footer(){
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Zero-Carbon</p>
        <p className="text-zinc-300 text-sm" style={{fontFamily:'Space Grotesk'}}>Zero-Carbon — Where Technology Meets Sustainability.</p>
      </div>
    </footer>
  )
}
