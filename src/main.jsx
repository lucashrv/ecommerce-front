import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Redux
import { Provider } from 'react-redux'
import store from './store/store'

// Global Style
import MessageBar from './components/MessageBar/index.jsx'
import GlobalStyle from './styles/global.jsx'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>

        <GlobalStyle />
        <MessageBar />
        <App />

        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
