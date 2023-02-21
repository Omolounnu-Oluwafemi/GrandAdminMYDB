import React from "react";
import Superadmin from "./pages/superAdmin";
import SuperadminLogin from "./pages/superadminLogin";
import CreateToken from "./pages/createtokens";
import CreateAdmin from "./pages/createadmin";
import SuperUsers from "./pages/users";
import SuperMessages from "./pages/messages";
import TokenSuccess from "./pages/tokenSuccess";
import AdminSuccess from "./pages/adminSuccess";
import ProtectedRoute from "./pages/protectedRoute";
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Superadmin/>}/>
        <Route path="createtoken" element={<CreateToken/>}/>
        <Route path="createadmin" element={<CreateAdmin/>}/>
        <Route path="users" element={<SuperUsers/>}/>
        <Route path="messages" element={<SuperMessages/>}/>
        <Route path="tokensuccess" element={<TokenSuccess/>}/>
        <Route path="adminsuccess" element={<AdminSuccess/>}/>
        </Route>
        <Route index path="/" element={<SuperadminLogin/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
