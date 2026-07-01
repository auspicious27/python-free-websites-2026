import { useState, useEffect } from 'react'

interface CodeLine {
  text: string
  className?: string
}

interface TypewriterCodeProps {
  lines: CodeLine[]
  typingSpeed?: number
  lineDelay?: number
}

export default function TypewriterCode({ lines, typingSpeed = 40, lineDelay = 300 }: TypewriterCodeProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true)
      // Restart after a pause
      const restartTimeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
        setIsComplete(false)
      }, 4000)
      return () => clearTimeout(restartTimeout)
    }

    const currentLine = lines[currentLineIndex].text

    if (currentCharIndex === 0 && currentLineIndex > 0) {
      // Delay before starting new line
      const delayTimeout = setTimeout(() => {
        setCurrentCharIndex(1)
        setDisplayedLines(prev => [...prev.slice(0, currentLineIndex), currentLine.charAt(0)])
      }, lineDelay)
      return () => clearTimeout(delayTimeout)
    }

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
          return newLines
        })
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      // Line complete, move to next
      const nextLineTimeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
        setDisplayedLines(prev => [...prev, ''])
      }, lineDelay)
      return () => clearTimeout(nextLineTimeout)
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay])

  // Initialize first line
  useEffect(() => {
    if (displayedLines.length === 0 && !isComplete) {
      setDisplayedLines([''])
    }
  }, [displayedLines.length, isComplete])

  return (
    <div className="font-mono text-sm leading-[2.2]">
      {displayedLines.map((line, i) => (
        <div key={i} className="flex items-start">
          <span className={lines[i]?.className || 'text-text-secondary'}>
            {line}
            {i === currentLineIndex && !isComplete && (
              <span className="inline-block w-[2px] h-[1.1em] bg-primary ml-[1px] animate-pulse align-middle" />
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
