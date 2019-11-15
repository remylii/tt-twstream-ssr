import React from "react";
import styled from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps
} from "@material-ui/system";

const Box = styled.header<PaletteProps & SpacingProps & TypographyProps>`
  ${palette}
  ${spacing}
  ${typography}
`;

const Header: React.FC = () => (
  <Box color="white" bgcolor="palevioletred" p={1} fontSize="18px">
    Header Components
  </Box>
);

export default Header;
