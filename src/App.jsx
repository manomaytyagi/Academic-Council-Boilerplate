import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import CoursesPage from "./pages/CoursesPage";
import "./styles/globals.css";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}
