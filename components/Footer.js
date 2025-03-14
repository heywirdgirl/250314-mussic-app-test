import { Container, Typography, Box, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
          {/* Footer Title & Description */}
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Footer Title
            </Typography>
            <Typography variant="body2" color="grey.400">
              Some description about the footer.
            </Typography>
          </Box>

          {/* Links */}
          <Stack direction="row" spacing={3}>
            <Link href="#" color="grey.400" underline="hover" sx={{ "&:hover": { color: "white" } }}>
              Link 1
            </Link>
            <Link href="#" color="grey.400" underline="hover" sx={{ "&:hover": { color: "white" } }}>
              Link 2
            </Link>
            <Link href="#" color="grey.400" underline="hover" sx={{ "&:hover": { color: "white" } }}>
              Link 3
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;