import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AppointmentsPage from './pages/AppointmentsPage';
import { AppointmentProvider } from './context/AppointmentContext';

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/booking/:doctorId" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
          </Routes>
        </Layout>
      </AppointmentProvider>
    </Router>
  );
}

export default App;