'use client'
import confettin from 'canvas-confetti'
import { useEffect } from 'react'

export const Confetti = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    if (success != null) {
      void confettin()
    }
  }, [])
  return null
}
