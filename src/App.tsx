
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Public Pages
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import FoodWasteImpact from "./pages/FoodWasteImpact";
import AuthPage from "./pages/AuthPage";


// Beneficiary Pages
import BeneficiaryDashboard from "./pages/beneficiary/BenDashboard";
import BenProfile from "./pages/beneficiary/BenProfile";
import BenHistory from "./pages/beneficiary/BenHistory";
import BenReservations from "./pages/beneficiary/BenReservations";
import BenSettings from "./pages/beneficiary/BenSettings";
import BenSurplus from "./pages/beneficiary/BenSurplus";

// Donor Pages
import DonorProfile from "./pages/donor/DonorProfile";
import DonorHistory from "./pages/donor/DonorHistory";
import DonorSettings from "./pages/donor/DonorSettings";
import DonorDashboard from "./pages/donor/DonorDashboard";
import DonorAddSurplus from "./pages/donor/DonorAddSurplus";
import DonorReservations from "./pages/donor/DonorReservations";
import DonorStatistics from "./pages/donor/DonorStatistics";
import DonorSurplus from "./pages/donor/DonorSurplus";

// Mock user for testing (to see admin page)
const mockUser = {
  id: 1,
  name: "Admin Test",
  email: "admin@foodshare.dz",
  role: "admin",
  token: "mock-token-123",
};
localStorage.setItem("user", JSON.stringify(mockUser));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/food-waste-impact" element={<FoodWasteImpact />} />

          {/* Redirect old login/register to new auth page */}
          <Route
            path="/login"
            element={<Navigate to="/auth?mode=signin" replace />}
          />
          <Route
            path="/register"
            element={<Navigate to="/auth?mode=signup" replace />}
          />
          <Route
            path="/doner"
            element={<Navigate to="/auth?mode=signup&type=donor" replace />}
          />
          <Route
            path="/beneficiary"
            element={
              <Navigate to="/auth?mode=signup&type=beneficiary" replace />
            }
          />

        

          {/* ===== BENEFICIARY ROUTES ===== */}
          <Route path="/beneficiary/dashboard" element={<BeneficiaryDashboard />} />
          <Route path="/beneficiary/surplus" element={<BenSurplus />} />
          <Route path="/beneficiary/reservations" element={<BenReservations />} />
          <Route path="/beneficiary/history" element={<BenHistory />} />
          <Route path="/beneficiary/profile" element={<BenProfile />} />
          <Route path="/beneficiary/settings" element={<BenSettings />} />

          {/* ===== DONOR ROUTES ===== */}
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/surplus" element={<DonorSurplus />} />
          <Route path="/donor/add-surplus" element={<DonorAddSurplus />} />
          <Route path="/donor/reservations" element={<DonorReservations />} />
          <Route path="/donor/history" element={<DonorHistory />} />
          <Route path="/donor/statistics" element={<DonorStatistics />} />
          <Route path="/donor/profile" element={<DonorProfile />} />
          <Route path="/donor/settings" element={<DonorSettings />} />

          {/* ===== CATCH ALL ===== */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;