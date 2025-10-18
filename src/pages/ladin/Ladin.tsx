import { Separator } from '@/components/ui/separator'
import { LadinJSON } from '@/data/ladin'
import { cn } from '@/lib/utils'
import PrompterMode from './prompter-mode/PrompterMode'

function Ladin() {
  return (
    <section className="relative">
      <div className="container py-10 max-w-2xl w-full mx-auto p-1">
        <h1 className="font-bold text-4xl text-center">Ladin</h1>
        <div className="mt-16 grid">
          {LadinJSON.map((line) => (
            <>
              <Separator />
              <div
                id={`line-${line.id}`}
                className={cn(
                  'flex items-start justify-between p-4 rounded-sm transition-colors duration-300 bg-transparent',

                  {
                    'dark:text-blue-300 text-blue-600 hover:bg-blue-50 hover:dark:bg-blue-950':
                      line.group === 'A',
                  },
                  {
                    'dark:text-green-200 text-green-600 hover:bg-green-50 hover:dark:bg-green-950':
                      line.group === 'B',
                  }
                )}
                key={line.id}
              >
                <span className="max-w-4/10">{line.text}</span>
                <span className="text-right max-w-4/10">{line.response}</span>
              </div>
            </>
          ))}
        </div>
      </div>
      <PrompterMode />
    </section>
  )
}

export default Ladin
