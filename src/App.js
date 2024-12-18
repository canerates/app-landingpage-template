import { React, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./utils/ThemeContext"
import Main from "./pages/Main"
import PrivacyPolicy from "./pages/PrivacyPolicy"

import { lightTheme, darkTheme } from "./utils/Theme";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
