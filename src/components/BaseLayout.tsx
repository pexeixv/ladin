import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'

type BaseLayoutProps = {
  disableHeader?: boolean
  disableFooter?: boolean
  className?: string
}

export default function BaseLayout({
  disableHeader = false,
  disableFooter = false,
  className = '',
}: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {!disableHeader && <Header />}

      <main className={cn('flex-1', className)}>
        <Outlet />
      </main>

      {!disableFooter && <Footer />}
    </div>
  )
}
