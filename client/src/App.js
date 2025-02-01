import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Components/Quiz.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
