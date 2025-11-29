import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gettodos from "./todos";
import Register from "./register";
import Login from "./login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<Gettodos />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
