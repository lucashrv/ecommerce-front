import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

// Public Routes Imports
import SignUp from './views/SignUp'
import Login from './views/Login'

// Private Routes Imports
import Test from './views/Test'

function App() {

  const authVerify = () => {
    return localStorage.getItem('token');
  };

  const PrivateRoute = ({ element: Component, ...props }) => {
    const getToken = authVerify()

    return getToken ? <Component {...props} /> : <Navigate to="/login" />
  }

  // Redirect connected users
  const RedirectConnected = ({ element: Component, ...props }) => {
    const getToken = authVerify()

    return getToken ? <Navigate to="/test" /> : <Component {...props} />
  }

  return (
    <>
      <Router>
        <Routes>

          {/* Public Routes */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route
            path="/signup"
            element={<RedirectConnected element={SignUp} />}
          />
          <Route
            path="/login"
            element={<RedirectConnected element={Login} />}
          />

          {/* Private Routes */}
          <Route
            path="/test"
            element={<PrivateRoute element={Test} />}
          />

        </Routes>
      </Router>
    </>
  )
}

export default App
