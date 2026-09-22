import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

flushSync(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})

rootElement.removeAttribute('data-prerendered')
