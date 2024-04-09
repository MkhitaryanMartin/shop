import Header from "./components/header";
import Home from "./pages/home";
import "./App.scss"
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
