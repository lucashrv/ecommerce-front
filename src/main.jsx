import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Redux
import { Provider } from 'react-redux'
import store from './store/store'

// Global Style
import GlobalStyle from './styles/global.jsx'

// Snackbar
import { SnackbarProvider } from 'notistack'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>

        <GlobalStyle />
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          iconVariant={{
            // success: '✅',
            // error: '❌',
            // warning: '⚠️',
            // info: 'ℹ️',
          }}
        >
          <App />
        </SnackbarProvider>

        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
