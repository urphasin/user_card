import "./App.css";
import _MainDashboard from "./components/_MainDashboard";
import About from "./pages/About";
import _AppsPage from "./pages/_AppsPage";
import BookFlights from "./pages/BookFlights";
import KazogaSearchV2 from "./pages/KazogaSearchV2";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Login } from "./components/auth/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/login' />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/dashboard' element={<_MainDashboard />} />
        <Route path='/book' element={<BookFlights />} />
        <Route path='/kazoga-v2' element={<KazogaSearchV2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />{" "}
        {/* Use element instead of components*/}
        <Route
          path='/apps-page'
          element={
            <PrivateRoute>
              <_AppsPage></_AppsPage>
            </PrivateRoute>
          }
        />
        {/* Default route */}
        <Route path='/' element={<Navigate to='/login' />} />{" "}
        {/* Replace Redirect with Navigate */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
