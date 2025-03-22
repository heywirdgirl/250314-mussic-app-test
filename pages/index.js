import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Fade } from "@mui/material";
import ProductCard from "../components/ProductCard"
import AboutUs from "../components/AboutUs";

export async function getStaticProps() {
  // Fetch product data from Firebase Realtime Database
  const response = await fetch(
    "https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  // Convert Firebase object data into an array
  const products = data ? Object.values(data) : [];

  return {
    props: { products },
    // ISR: Re-fetch product data every 60 seconds
  };
}

export default function Home({ products }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
/*      <Box
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
      </Box>*/
      
      {/* PHẦN HERO */}
<Box
  sx={{
    position: "relative",
    minHeight: "60vh",
    background: "url('/images/oled-display.jpg') center/cover no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* LỚP PHỦ TỐI */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    }}
  />

  {/* VĂN BẢN HIỆU ỨNG */}
  <Fade in={isVisible} timeout={700}>
    <Box sx={{ position: "relative", textAlign: "center", color: "white", px: 3 }}>
      <Typography variant="h3" fontWeight="bold">
        Chào mừng đến với [Tên Công Ty] OLED
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Công nghệ màn hình OLED tiên tiến – Hình ảnh sắc nét, màu sắc chân thực.
      </Typography>
    </Box>
  </Fade>
</Box>

      {/* PRODUCT SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Our Collection
        </Typography>

        {/* Handle Empty Data */}
        {products.length === 0 ? (
          <Typography variant="body1" align="center" color="textSecondary">
            No products available
          </Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <AboutUs />
    </>
  );
}
