import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Navbar from './components/Navbar'

// Public Routes Imports
import SignUp from './views/SignUp'
import Login from './views/Login'
import Home from './views/Home'

// Private Routes Imports
import Test from './views/Test'

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
