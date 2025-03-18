// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";
import { Container, Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;

