import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const Footer: React.FC = () => (
  <Box my={4} p={1}>
    <footer className="footer">
      <Typography variant="h6" component="p" gutterBottom>
        footer
      </Typography>
      <Link href="/">Home</Link>,
      <Link
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </Link>
    </footer>
  </Box>
);

export default Footer;
