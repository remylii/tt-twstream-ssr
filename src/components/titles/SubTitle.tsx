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

const H2 = styled.h2<PaletteProps & SpacingProps & TypographyProps>`
  ${palette}
  ${spacing}
  ${typography}
  padding: 5px;
  border-left: 5px solid #aaa;
`;

type Props = {
  title: string;
};

const SubTitle: React.FC<Props> = (props: Props) => {
  return (
    <H2 fontSize="16px" mb={1}>
      {props.title}
    </H2>
  );
};

export default SubTitle;
