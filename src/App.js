import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";


function App() {
  return (
    <>
    {/* <TourDetails/> */}
    <Routes>
    <Route path="/" element={<Home />}></Route>
    </Routes>
    <Routes>
    <Route path="/city/:id" element={<TourDetails />}></Route>
    </Routes>
    </>
  );
}

export default App;
