import Links from "./components/Connect";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Profile from "./components/Profile";
import './components/Connect.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./components/Contact";

function App() {
  return (
    <>

      <section className="container ">
        <Router>
          <Profile />
          <Links />
          <Social />
          <Contact />
        </Router>
        <Footer />
      </section>

    </>
  );
}

export default App;
