import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter text to analyze"
        mode={mode}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
