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

import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NotesIcon from "@material-ui/icons/Notes";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
      <List component="nav" aria-label="main mailbox folder">
        {props.threads && props.threads.length > 0 ? (
          props.threads.map(thread => {
            return (
              <ListItem
                button
                key={`thread-${thread.id}`}
                component="a"
                href={`/thread/${thread.id}`}
              >
                <ListItemIcon tabIndex={-1}>
                  <NotesIcon />
                </ListItemIcon>
                <ListItemText primary={thread.title} />
              </ListItem>
            );
          })
        ) : (
          <div>まだスレッドはない</div>
        )}
      </List>
    </Box>
  );
};
