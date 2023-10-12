import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NextSevenDays } from "./components/NextSevenDays";
import { DataProvider } from "./context/DataContext";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* DataProvider wraps the entire application to provide data context */}
        <DataProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Nested routes for different screens */}
              <Route path="next_seven_days" element={<NextSevenDays />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="*" element={<>404</>} /> {/* 404 page */}
            </Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
