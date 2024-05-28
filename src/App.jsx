import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages/Pages";
function App() {
  return (
    <BrowserRouter>
      <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
