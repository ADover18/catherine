import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Artworks from "./Artworks/Artworks";
import Contact from "./Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <section class="container" id="social-links">
          <div class="wrapper">
            <a
              class="btn btn-block"
              href="https://twitter.com/intent/tweet?url=https://catherinestevenson.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Share on Twitter
            </a>
          </div>
          <div class="wrapper">
            <a
              class="btn btn-block"
              href="https://facebook.com/sharer/sharer.html?u=https://catherinestevenson.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Share on Facebook
            </a>
          </div>
          <div class="wrapper">
            <a
              class="btn btn-block"
              href="https://reddit.com/submit?url=https://catherinestevenson.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Share on Reddit
            </a>
          </div>
        </section>
        <footer class="container-fluid">
          <div class="row footer">
            <small>
              &copy; Catherine Stevenson <span class="year"></span> All Rights
              Reserved
            </small>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
