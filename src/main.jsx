import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { selectMessage } from './redux/slices/messageSlice.js'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store.js'

// Global Style
import GlobalStyle from './styles/global.js'
import MessageBar from './components/MessageBar/index.jsx'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>

        <GlobalStyle />

        <MessageBar />

        <App />

      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
