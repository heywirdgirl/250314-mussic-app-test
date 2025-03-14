import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Fade } from "@mui/material";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return { props: { products } };
}

export default function Home({ products }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "60vh",
          background: "url('/images/hat.jpg') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />

        {/* ANIMATED TEXT */}
        <Fade in={isVisible} timeout={700}>
          <Box sx={{ position: "relative", textAlign: "center", color: "white", px: 3 }}>
            <Typography variant="h3" fontWeight="bold">
              Welcome to Simple Shop
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Discover the latest trends in fashion & accessories.
            </Typography>
          </Box>
        </Fade>
      </Box>

      {/* PRODUCT SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Our Collection
        </Typography>

        {/* PRODUCT GRID */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}