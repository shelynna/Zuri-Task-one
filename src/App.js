
import './components/Connect.css'
import { Routes, Route } from 'react-router-dom';
// import Contact from "./components/Contact";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";


function App() {
  return (

    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>


  );
}

export default App;
