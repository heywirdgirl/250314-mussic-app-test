import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Grid, Typography, Button, CardMedia, CircularProgress, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Fetch all product IDs from Firebase for SSG
export async function getStaticPaths() {
  try {
    const response = await fetch(
      "https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    const products = data ? Object.values(data) : [];
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
}

// Fetch individual product details from Firebase
/*export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/products/${params.id}.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const product = await response.json();

    if (!product) return { notFound: true };

    return { props: { product } };
  } catch (error) {
    return { notFound: true };
  }
}*/

export async function getStaticProps({ params }) {
  try {
    const adjustedId = parseInt(params.id) - 1; // Subtract 1 to match Firebase ID
    const response = await fetch(
      `https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/${adjustedId}.json`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const product = await response.json();
    if (!product) return { notFound: true };

    return { props: { product } };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} - OLED Screens</title>
        <meta name="description" content={product.description} />
      </Head>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
              {product.price.toFixed(2)} VND
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              {product.description}
            </Typography>

            {/* Specifications */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2"><b>Size:</b> {product.specs.size}</Typography>
              <Typography variant="body2"><b>Resolution:</b> {product.specs.resolution}</Typography>
              <Typography variant="body2"><b>Refresh Rate:</b> {product.specs.refresh_rate}</Typography>
              <Typography variant="body2"><b>Brightness:</b> {product.specs.brightness}</Typography>
              <Typography variant="body2"><b>Technology:</b> {product.specs.technology}</Typography>
              <Typography variant="body2"><b>Warranty:</b> {product.warranty}</Typography>
            </Box>

            {/* Buy Now Button */}
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ mt: 4 }}
              startIcon={<ShoppingCartIcon />}
              disabled={!product.in_stock} // Disable button if product is out of stock
            >
              {product.in_stock ? "Mua Ngay" : "Hết Hàng"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}