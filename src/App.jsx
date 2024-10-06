import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles/global-styles";
import theme from "./theme/theme";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WallOfFame from './pages/KimGatwiri/Components/index';
import Navigation from "./pages/KimGatwiri/Components/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/KimGatwiri" element={<WallOfFame  />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
