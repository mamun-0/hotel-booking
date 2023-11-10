import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Standard from "./Components/Pages/Standard/Standard";
import Executive from "./Components/Pages/Executive/Executive";
import Deluxe from "./Components/Pages/Deluxe/Deluxe";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/standard" component={Standard} />
        <Route exact path="/executive" component={Executive} />
        <Route exact path="/deluxe" component={Deluxe} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
    </>
  );
}

export default App;
