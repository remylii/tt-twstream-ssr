import React from "react";
import styled from "styled-components";
import {
  spacing,
  SpacingProps,
  typography,
  TypographyProps
} from "@material-ui/system";

type Props = {
  author: string;
  datetime: string;
  message: string;
};

const Panel = styled.div`
  &::after {
    display: block;
    content: "";
    margin: 25px 5px;
    border-bottom: 1px dotted #999;
  }

  &:last-child::after {
    margin: 50px 0 30px;
    border-bottom: 1px solid #777;
  }
`;

const Caption = styled.div<SpacingProps & TypographyProps>`
  ${spacing}
  ${typography}
  line-height: 16px;
`;

const Author = styled.div<TypographyProps>`
  ${typography}
  display: inline-block;
  letter-spacing: 0.1em;
`;

const Datetime = styled.div<SpacingProps & TypographyProps>`
  ${spacing}
  ${typography}
  display: inline-block;
  letter-spacing: 0;
`;

const Body = styled.div<TypographyProps>`
  ${typography}
  letter-spacing: 0.1em;
  line-height: 1.4;
`;

const CommentBox: React.FC<Props> = (props: Props) => {
  return (
    <Panel>
      <Caption mb="10px" fontSize="14px">
        <Author fontWeight="bold">{props.author}</Author>
        <Datetime fontSize="12px" pl="25px">
          {props.datetime}
        </Datetime>
      </Caption>
      <Body fontSize="15px">{props.message}</Body>
    </Panel>
  );
};

export default CommentBox;
