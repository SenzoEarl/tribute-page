import logo from './logo.png';
import './App.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  return (
      <main className = "text-gray-400 bg-gray-900 body-font">
            <Navbar logo={logo}/>
            <Gallery/>
      </main>
  );
}

export default App;
