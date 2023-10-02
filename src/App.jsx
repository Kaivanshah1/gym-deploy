import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ExersisesDetail from "./pages/ExersisesDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/exercise/:id" element={<ExersisesDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
