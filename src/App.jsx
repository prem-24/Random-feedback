import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />

                <Feedbackstats />

                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
