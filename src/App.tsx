import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import { HeaderFooter } from "./Components";
import { About, Consultants, Contact, Home } from "./Pages";
import { UnderConstruction } from "./Pages/Home/UnderConstruction";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
          {/* <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultants" element={<Consultants />} /> */}
        </Routes>
      </Router>
      {/* <HeaderFooter>
      </HeaderFooter> */}
    </MantineProvider>
  );
}
