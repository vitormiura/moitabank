import Index from './pages/index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Help from './pages/help'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  </Router>
  );
}

export default App;