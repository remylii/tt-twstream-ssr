import React from "react";
import { BbsState } from "../reducers/Bbs";
import styled from "styled-components";
import { spacing, SpacingProps } from "@material-ui/system";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NotesIcon from "@material-ui/icons/Notes";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SubTitle from "./titles/SubTitle";

const Box = styled.div<SpacingProps>`
  ${spacing}
`;

interface OwnProps {}
type HomeProps = OwnProps & BbsState;

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Box mb={1}>
      <SubTitle title="スレッド一覧" />
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
                <ListItemIcon>
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
