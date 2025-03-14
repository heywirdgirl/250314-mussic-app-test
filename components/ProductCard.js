import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
      }}
    >
      {/* PRODUCT IMAGE */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />

      {/* CONTENT */}
      <CardContent>
        <Typography variant="h6" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      {/* BUTTON */}
      <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
        <Link href={`/products/${product.id}`} passHref>
          <Button variant="contained" color="primary" fullWidth>
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}