import Header from "./components/header";
import Home from "./pages/home";
import "./App.scss"
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <div className="root-container">
      <Header/>
      <Home />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
