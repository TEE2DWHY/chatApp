import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Global Route */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Private Route */}
          <Route element={<PrivateRoute />}>
            <Route path="/messages" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
