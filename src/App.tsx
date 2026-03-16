import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// ========== الصفحات العامة ==========
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FoodWasteImpact from './pages/FoodWasteImpact';
import ForgotPassword from './pages/ForgotPassword';

// ========== صفحات Beneficiary ==========
import BenDashboard from './pages/beneficiary/BenDashboard';
import BenSurplus from './pages/beneficiary/BenSurplus';
import BenReservations from './pages/beneficiary/BenReservations';
import BenHistory from './pages/beneficiary/BenHistory';
import BenProfile from './pages/beneficiary/BenProfile';
import BenSettings from './pages/beneficiary/BenSettings';

// ========== صفحات Donor ==========
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorSurplus from './pages/donor/DonorSurplus';
import DonorAddSurplus from './pages/donor/DonorAddSurplus';
import DonorReservations from './pages/donor/DonorReservations';
import DonorHistory from './pages/donor/DonorHistory';
import DonorStatistics from './pages/donor/DonorStatistics';
import DonorProfile from './pages/donor/DonorProfile';
import DonorSettings from './pages/donor/DonorSettings';
import DonorLogin from './pages/donor/DonorLogin';
import DonorRegister from './pages/donor/DonorRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ===== الصفحات العامة ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/food-waste-impact" element={<FoodWasteImpact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ===== صفحات Beneficiary ===== */}
          <Route path="/beneficiary/dashboard" element={<BenDashboard />} />
          <Route path="/beneficiary/surplus" element={<BenSurplus />} />
          <Route path="/beneficiary/reservations" element={<BenReservations />} />
          <Route path="/beneficiary/history" element={<BenHistory />} />
          <Route path="/beneficiary/profile" element={<BenProfile />} />
          <Route path="/beneficiary/settings" element={<BenSettings />} />

          {/* ===== صفحات Donor ===== */}
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/surplus" element={<DonorSurplus />} />
          <Route path="/donor/add-surplus" element={<DonorAddSurplus />} />
          <Route path="/donor/reservations" element={<DonorReservations />} />
          <Route path="/donor/history" element={<DonorHistory />} />
          <Route path="/donor/statistics" element={<DonorStatistics />} />
          <Route path="/donor/profile" element={<DonorProfile />} />
          <Route path="/donor/settings" element={<DonorSettings />} />
          <Route path="/donor/login" element={<DonorLogin />} />
          <Route path="/donor/register" element={<DonorRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;