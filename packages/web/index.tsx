import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from '@learn/ui'
import {WithSkiaWeb} from "@shopify/react-native-skia/lib/module/web"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
