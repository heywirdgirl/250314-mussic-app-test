import { Container, Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Footer Title & Description */}
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6">Footer Title</Typography>
            <Typography variant="body2" color="grey.400">
              Some description about the footer.
            </Typography>
          </Box>

          {/* Footer Links */}
          <Stack direction="row" spacing={3}>
            <Link href="#" color="grey.400" underline="hover">
              Link 1
            </Link>
            <Link href="#" color="grey.400" underline="hover">
              Link 2
            </Link>
            <Link href="#" color="grey.400" underline="hover">
              Link 3
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;