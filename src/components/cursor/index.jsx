'use client'

import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const updateCursorPosition = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className='pointer-events-none fixed z-[100000] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-black transition-transform duration-150'
      ref={cursorRef}
    />
  )
}
