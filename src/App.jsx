import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import Navbar from './components/Navbar'

// Public Routes Imports
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'

// Private Routes Imports
import Test from './views/Test'
import Dashboard from './views/dashboard'

function App() {

  const authVerify = () => {
    return localStorage.getItem('token');
  };

  const PrivateRouteNav = ({ element: Component, ...props }) => {
    const getToken = authVerify()

    return getToken
      ? <>
        <Navbar />
        <Component {...props} />
      </>
      : <Navigate to="/login" />
  }

  const PublicRouteNav = ({ element: Component, ...props }) => {
    return <>
      <Navbar />
      <Component {...props} />
    </>
  }

  // Public Route without Navbar
  const PublicRoute = ({ element: Component, ...props }) => {
    return <>
      <Component {...props} />
    </>
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

          {/* Public Routes without Navbar */}
          <Route
            path="/signup"
            element={<RedirectConnected element={SignUp} />}
          />
          <Route
            path="/login"
            element={<RedirectConnected element={Login} />}
          />
          <Route
            path="/dashboard"
            element={<PublicRoute element={Dashboard} />}
          />

          {/* Public Routes with Navbar */}
          <Route
            path="/"
            element={<PublicRouteNav element={Home} />}
          />


          {/* Private Routes with Navbar */}
          <Route
            path="/test"
            element={<PrivateRouteNav element={Test} />}
          />

        </Routes>
      </Router>
    </>
  )
}

export default App
