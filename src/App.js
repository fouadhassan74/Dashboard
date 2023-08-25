import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import List from "./pages/List/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { userInputs, productInputs } from "./forminputs.js";
import "./style/darkMode.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";
function App() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <div className={darkmode ? "app dark" : "app"}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<List />} />
        <Route path='/products' element={<List />} />
        <Route path='/users/:userId' element={<Single />} />
        <Route
          path='/users/new'
          element={<New input={userInputs} title='Add new user' />}
        />
        <Route
          path='/products/new'
          element={<New input={productInputs} title='Add new product' />}
        />
      </Routes>
    </div>
  );
}

export default App;
