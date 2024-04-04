import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom'
import Navbar from '../components/Navbar'

// Public Routes
import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'

// Private Routes
import Test from '../views/Test'

// Dashboard Routes
import Dashboard from '../views/dashboard'
import HomeDashboard from '../views/dashboard/Pages/Home'
import Users from '../views/dashboard/Pages/Users'


function IndexRoutes() {

    const authVerify = () => {
        return localStorage.getItem('token');
    }

    // Private route with navbar
    const PrivateRouteNav = ({ element: Component, ...props }) => {
        const isAuthenticated = authVerify()

        return isAuthenticated
            ? <>
                <Navbar />
                <Component {...props} />
            </>
            : <Navigate to="/login" />
    }

    // Public route with navbar
    const PublicRouteNav = ({ element: Component, ...props }) => {
        return <>
            <Navbar />
            <Component {...props} />
        </>
    }

    // Redirect connected users
    const RedirectConnected = ({ element: Component, ...props }) => {
        const isAuthenticated = authVerify()

        return isAuthenticated
            ? <Navigate to="/test" />
            : <Component {...props} />

    }

    // Dashboard Admin private routes
    const PrivateDashboard = ({ element }) => {
        const isAuthenticated = authVerify()

        return isAuthenticated
            ? <Dashboard element={element} />
            : <Navigate to="/login" />
    }



    // Public Route without Navbar
    // const PublicRoute = ({ element: Component, ...props }) => {
    //   return <>
    //     <Component {...props} />
    //   </>
    // }

    return (
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

                {/* Dashboard Admin Routes */}
                <Route
                    path="/dashboard/home"
                    element={<PrivateDashboard element={HomeDashboard} />}
                />
                <Route
                    path="/dashboard/users"
                    element={<PrivateDashboard element={Users} />}
                />

            </Routes>
        </Router>
    )
}

export default IndexRoutes
