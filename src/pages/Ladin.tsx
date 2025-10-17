import { Separator } from '@/components/ui/separator'
import { LadinJSON } from '@/data/ladin'
import { cn } from '@/lib/utils'

function Ladin() {
  return (
    <section>
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-4xl text-center">Ladin</h1>
        <div className="mt-16 grid gap-4 ">
          {LadinJSON.map((line) => (
            <>
              <Separator />
              <div
                id={`line-${line.id}`}
                className={cn(
                  'flex items-start justify-between py-1 px-3 rounded-sm transition-colors duration-300 bg-transparent gap-8',

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
    </section>
  )
}

export default Ladin
