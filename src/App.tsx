import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { HeaderFooter } from "./Components/HeaderFooter";
import { Consultants } from "./Pages/Consultants/Consultants";

function App() {
  return (
    <HeaderFooter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultants" element={<Consultants />} />
        </Routes>
      </Router>
    </HeaderFooter>
  );
}

export default App;
