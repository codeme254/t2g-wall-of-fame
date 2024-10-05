import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles/global-styles";
import theme from "./theme/theme";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Heading from "./pages/Florah-nduati/components/Header/header";
import Hero2 from "./pages/Florah-nduati/components/Hero/hero";
import About from "./pages/Florah-nduati/components/About/About";
import Technologies from "./pages/Florah-nduati/components/Technologies/technologies";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Florah-nduati"
            element={
              <>
                <Heading />
                <Hero2 />
                <About />
                <Technologies />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
