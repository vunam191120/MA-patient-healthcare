import { Routes, Route } from 'react-router-dom';
import ClientBookAppointmentPage from './pages/clientBookAppointment';
import ContactPage from './pages/contact';
import Home from './pages/home';
import NoMatch from './pages/noMatch';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/bookAppointment"
          element={<ClientBookAppointmentPage />}
        ></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
