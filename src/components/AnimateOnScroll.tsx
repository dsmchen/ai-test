import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  animation?: 'animate-fade-up' | 'animate-fade-in' | 'animate-scale-in'
}

export default function AnimateOnScroll({ children, className = '', animation = 'animate-fade-up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${visible ? animation : 'opacity-0'} ${className}`}>
      {children}
    </div>
  )
}
