import {
  Navigate
} from 'react-router-dom'
import Navbar from './components/Navbar'

// Public Routes

// Private Routes

// Dashboard Routes
import IndexRoutes from './routes/indexRoutes'

function App() {

  const authVerify = () => {
    return localStorage.getItem('token');
  };

  const PrivateRouteNav = ({ element: Component, ...props }) => {
    const isAuthenticated = authVerify()

    return isAuthenticated
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
  // const PublicRoute = ({ element: Component, ...props }) => {
  //   return <>
  //     <Component {...props} />
  //   </>
  // }

  // Redirect connected users
  const RedirectConnected = ({ element: Component, ...props }) => {
    const isAuthenticated = authVerify()

    return isAuthenticated
      ? <Navigate to="/test" />
      : <Component {...props} />
  }

  return (
    <IndexRoutes />
    // <>
    //   <Router>
    //     <Routes>

    //       {/* Public Routes without Navbar */}
    //       <Route
    //         path="/signup"
    //         element={<RedirectConnected element={SignUp} />}
    //       />
    //       <Route
    //         path="/login"
    //         element={<RedirectConnected element={Login} />}
    //       />

    //       {/* Public Routes with Navbar */}
    //       <Route
    //         path="/"
    //         element={<PublicRouteNav element={Home} />}
    //       />

    //       {/* Private Routes with Navbar */}
    //       <Route
    //         path="/test"
    //         element={<PrivateRouteNav element={Test} />}
    //       />

    //       {/* Dashboard Admin Routes */}
    //       <Route
    //         path="/dashboard/users"
    //         element={<Dashboard element={Users} />}
    //       />
    //       <Route
    //         path="/dashboard/orders"
    //         element={<Dashboard element={Orders} />}
    //       />

    //     </Routes>
    //   </Router>
    // </>
  )
}

export default App
