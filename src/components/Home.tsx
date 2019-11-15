import React from "react";
import { BbsState } from "../reducers/Bbs";
import styled from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps
} from "@material-ui/system";
import ThreadLink from "./links/ThreadLink";

const Box = styled.div<PaletteProps & SpacingProps & TypographyProps>`
  ${palette}
  ${spacing}
  ${typography}
`;

interface OwnProps {}
type HomeProps = OwnProps & BbsState;

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Box>
      <p>Home</p>
      {props.threads && props.threads.length > 0 ? (
        props.threads.map(thread => {
          return (
            <ul key={`thread-${thread.id}`}>
              <li>
                <ThreadLink thread_id={thread.id}>- {thread.title}</ThreadLink>
              </li>
            </ul>
          );
        })
      ) : (
        <div>まだスレッドはない</div>
      )}
    </Box>
  );
};
