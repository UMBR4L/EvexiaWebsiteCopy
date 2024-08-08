import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./applicationPages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/how-it-works" />
        <Route path="/partners"  />
        <Route path="/testimonials" />
        <Route path="/articles" />
        <Route path="/terms-and-conditions" />
        <Route path="/privacy-policy" />
        <Route path="/partner-agreement" />
        <Route
          path="/app/*"
          element={
            <AuthProvider>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Routes>
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
