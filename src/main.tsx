import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './Route/Routing'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Routing/>
  </StrictMode>,
)
