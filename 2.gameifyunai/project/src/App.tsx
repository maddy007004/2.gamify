import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<div>Profile coming soon...</div>} />
          <Route path="/lessons" element={<div>Lessons coming soon...</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;