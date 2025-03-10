import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {store} from '../src/RTK/store.ts'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>,
)
