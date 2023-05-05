import "./App.css";
import Allroutes from "./allroutes/Allroutes";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Allroutes />
      <Footer/>
    </div>
  );


}

export default App;
