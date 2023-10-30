import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Standard from "./Components/Pages/Standard/Standard";
import Executive from "./Components/Pages/Executive/Executive";
import Deluxe from "./Components/Pages/Deluxe/Deluxe";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Route exact path="/standard" component={Standard} />
        <Route exact path="/executive" component={Executive} />
        <Route exact path="/deluxe" component={Deluxe} />
      </BrowserRouter>
    </>
  );
}

export default App;
