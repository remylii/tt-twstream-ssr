import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import styled from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps
} from "@material-ui/system";

const Box = styled.footer<PaletteProps & SpacingProps>`
  ${palette}
  ${spacing}
`;

const Footer: React.FC = () => (
  <Box className="footer" my={4} p={1}>
    <Typography variant="h6" component="p" gutterBottom>
      footer
    </Typography>
    <Link href="/">Home</Link>&emsp;/&emsp;
    <Link href="https://google.com/" target="_blank" rel="noopener noreferrer">
      Google
    </Link>
  </Box>
);

export default Footer;
