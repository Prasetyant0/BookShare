import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Impact } from "./pages/impact";
import { Contact } from "./pages/contact";
import { DonateBooks } from "./pages/donate-books";
import { DonateMoney } from "./pages/donate-money";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate-books" element={<DonateBooks />} />
          <Route path="/donate-money" element={<DonateMoney />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;