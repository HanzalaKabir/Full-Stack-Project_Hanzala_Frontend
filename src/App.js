import { Route, Routes } from "react-router";
import { Home, Payment, SearchResults, SingleHotel, Wishlist } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<SearchResults />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/confirm-booking/stay/:id" element={<Payment />} />
    </Routes>
  );
}

export default App;
