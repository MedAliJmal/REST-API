import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/Get/:id" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
