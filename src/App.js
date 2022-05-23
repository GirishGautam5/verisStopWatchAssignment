import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import FooterComponent from "./Footer/FooterComponent";
import HomeScreen from "./HomeScreen";
import HorizantalScroll from "./HorizantalScroll";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="side-bar">
            <button>&#9776;</button>
          </div>
          <div className="app-logo">
            <Link to="/" className="title">
              Veris
            </Link>
          </div>
          <div className="navigation-links">
            <Link to="/">
              Customers
              <i
                className="fa fa-user p-3 fa-6x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
            <Link to="/">
              Sign In
              <i
                className="fa fa-user p-3 fa-6x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <HomeScreen />
            <HorizantalScroll />
          </div>
        </main>
        <footer className="footer-area">
          <FooterComponent />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
