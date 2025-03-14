import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Grid, Typography, Button, CardMedia, CircularProgress, Box } from "@mui/material";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return { notFound: true };

  return { props: { product } };
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
        <title>{product.name} - Simple Shop</title>
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
              sx={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 2 }}
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              {product.description}
            </Typography>
            <Button variant="contained" color="success" sx={{ mt: 4 }}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}