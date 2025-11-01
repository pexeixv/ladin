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
                  'flex items-start justify-between p-4 rounded-sm transition-colors duration-300 bg-transparent gap-8',

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
                <div className="flex gap-2 w-full max-w-4/10">
                  <span className="font-black opacity-30 text-[20px] relative bottom-1">
                    {line.group === 'A' ? '1' : line.group === 'B' && '2'}
                  </span>
                  <span className="">{line.text}</span>
                </div>
                <span className="text-right max-w-4/10 w-fit">{line.response}</span>
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
