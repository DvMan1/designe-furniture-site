import "./App.css";
import { useState,useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);
  return (
    <BrowserRouter>
    {isLoading ? <LoadingScreen /> : <Pages />}
    </BrowserRouter>
  );
}

export default App;
