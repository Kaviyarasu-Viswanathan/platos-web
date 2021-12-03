import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page_two" element={<PageOne />} />
      <Route path="/page_one" element={<PageTwo />} />
    </Routes>
  );
}

export default App;
