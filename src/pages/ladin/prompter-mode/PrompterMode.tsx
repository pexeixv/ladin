import { Button } from '@/components/ui/button'
import { Maximize2Icon, Minimize2Icon } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useEffect, useState } from 'react'
import PrompterText from './PrompterText'

function PrompterMode() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    }
  }, [open])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild className="fixed bottom-8 right-8">
            <Button variant="secondary" size="icon" className="rounded-full cursor-pointer">
              <Maximize2Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Prompter</p>
          </TooltipContent>
        </Tooltip>
      </AlertDialogTrigger>

      <AlertDialogContent className="p-0 fixed top-0 left-0 translate-0 w-full h-full max-w-none rounded-none sm:max-w-none">
        <div className="h-full flex flex-col">
          <PrompterText />

          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Tooltip>
                <TooltipTrigger asChild className="fixed bottom-8 right-8">
                  <Button
                    className="rounded-full cursor-pointer"
                    variant="outline"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <Minimize2Icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Exit Prompter</p>
                </TooltipContent>
              </Tooltip>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PrompterMode
