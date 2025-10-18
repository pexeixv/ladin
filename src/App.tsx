import { Routes, Route } from 'react-router-dom'
import Demo from '@/pages/Demo'
import NotFound from '@/pages/NotFound'
import BaseLayout from '@/components/BaseLayout'
import Ladin from '@/pages/ladin/Ladin'

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Ladin />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<BaseLayout disableHeader disableFooter />}>
        <Route path="/minimal" element={<>Test</>} />
      </Route>
    </Routes>
  )
}

export default App
