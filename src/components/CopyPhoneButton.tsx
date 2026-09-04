import { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  value: string
  idleLabel: string
  copiedLabel: string
  className?: string
}

export function CopyPhoneButton({ value, idleLabel, copiedLabel, className }: Props) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      try {
        const ta = document.createElement('textarea')
        ta.value = value
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      } catch {
        return
      }
    }
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }, [value])

  return (
    <button
      type="button"
      className={className ?? 'ev-copy-chip'}
      onClick={onClick}
      aria-label={copied ? copiedLabel : idleLabel}
    >
      {copied ? copiedLabel : idleLabel}
    </button>
  )
}
