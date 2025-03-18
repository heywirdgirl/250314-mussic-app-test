import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import theme from "../theme"; // Import your MUI theme
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize default styles */}
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 3 ,px:}}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;