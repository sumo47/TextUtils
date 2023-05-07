import { useState } from 'react';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import Convert from './components/Convert'
import About from './components/about'
import Alert from './components/Alert'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark')
  const [search, setSearch] = useState('secondary')
  const [CssColor, setColor] = useState("light")
  const [alert, setAlert] = useState(null)
  const [wasMode, setWasMode] = useState("dark") //to remember previus state , create new state

  const ChangeMode = () => {
    if (mode === 'dark' || wasMode === "dark") {
      document.body.style.backgroundColor = 'white'
      setMode('light')
      setColor('black')
      setSearch('light')
      alertFunction("Light mode successfully Enabled", "success")
      setWasMode("light")

      document.title = "Text-Utils Light mode"

      setInterval(() => {
        document.title = "install Text-Utils"
      }, 2000);
      setInterval(() => {
        document.title = "setInterval 1.5 sec"
      }, 1500);
    }
    else if (wasMode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = '#022a4d'
      setColor('white')
      setSearch('secondary')
      alertFunction("Dark mode successfully Enabled", "success")
      setWasMode("dark")
      document.title = "Text-Utils Dark mode"
    }
  }

  const GreenMode = () => {
    setMode("success")
    setSearch("success")
    setColor('light')
    document.body.style.backgroundColor = '#021f09'
  }

  const RedMode = () => {
    setMode('danger')
    setSearch("danger")
    document.body.style.backgroundColor = '#e87b79'
  }

  const alertFunction = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} ChangeMode={ChangeMode} search={search} GreenMode={GreenMode} RedMode={RedMode} about={"About"} />
        <Alert alert={alert} />

        <div className='container my-3'>
          <Routes>
            {/* exact will match exact route   */}
            <Route exact path="/about" element={<About mode={mode} text={CssColor}/>} />
            <Route exact path="/" element={<Convert showAlert={alertFunction} text={CssColor} textArea={search} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
