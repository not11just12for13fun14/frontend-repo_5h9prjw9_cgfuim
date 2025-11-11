import { useEffect, useRef } from 'react'

export default function ParallaxStars(){
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2 + 0.5,
      r: Math.random() * 1.2 + 0.2,
    }))

    function draw(){
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = '#00ff8c22'
      for(const s of stars){
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()
      }
    }

    function onMove(e){
      const mx = (e.clientX / w - 0.5) * 10
      const my = (e.clientY / h - 0.5) * 10
      for(const s of stars){
        s.x += mx / s.z * 0.2
        s.y += my / s.z * 0.2
        if(s.x < 0) s.x = w
        if(s.x > w) s.x = 0
        if(s.y < 0) s.y = h
        if(s.y > h) s.y = 0
      }
      draw()
    }

    function onResize(){
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      draw()
    }

    draw()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10"/>
}
