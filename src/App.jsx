import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Complain from './pages/Complain';
import Information from './pages/Information';
import Users from './pages/Users';
import Home from './pages/Home';
import Login from './pages/Login';
import Category from './pages/Category';
import Business from './pages/Business';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="complain" element={<Complain />} />
          <Route path="information" element={<Information />} />
          <Route path="users" element={<Users />} />
          <Route path="category" element={<Category />} />
          <Route path="business" element={<Business />} />
        </Route>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;