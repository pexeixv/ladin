import { useEffect, useState } from 'react'
import { LadinJSON } from '@/data/ladin.ts'
import { cn } from '@/lib/utils'

export default function PrompterText() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(Math.min(LadinJSON.length - 1, counter + 1))
  const decrement = () => setCounter((c) => Math.max(0, c - 1))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        setCounter((c) => Math.min(LadinJSON.length - 1, c + 1))
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        setCounter((c) => Math.max(0, c - 1))
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="flex-1 overflow-auto flex flex-col">
      <PrompterLine value={counter - 1} onClick={decrement} />
      <PrompterLine value={counter} onClick={increment} />
      <PrompterLine value={counter + 1} onClick={increment} />
    </section>
  )
}

function PrompterLine({ value, onClick }: { value: number; onClick: () => void }) {
  return (
    <div
      className={cn(
        'h-full flex flex-col items-center justify-center p-8 cursor-pointer select-none border-b-4 relative overflow-hidden',
        { 'bg-blue-50 dark:bg-blue-900/50': LadinJSON[value]?.group === 'A' },
        { 'bg-green-50 dark:bg-green-900/50': LadinJSON[value]?.group === 'B' }
      )}
      onClick={onClick}
    >
      <span className="font-bold text-3xl max-w-md text-center">
        {LadinJSON[value]?.text || ''}
      </span>
      <span className="mt-2 text-lg text-white/60">{LadinJSON[value]?.response || ''}</span>
      <span className="text-[160px] font-black opacity-10 absolute -rotate-12 left-4 top-0">
        {LadinJSON[value]?.group === 'A' && '1'}
        {LadinJSON[value]?.group === 'B' && '2'}
      </span>
    </div>
  )
}
