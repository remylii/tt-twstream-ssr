import React from "react";
import { PostComment } from "../reducers/Comment";
import { DispatchProps } from "../containers/BbsContainer";
import styled from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps
} from "@material-ui/system";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SubTitle from "./titles/SubTitle";

const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette}
  ${spacing}
`;

type ownProps = {
  thread_id: number;
};

type Props = ownProps & DispatchProps;

interface State {
  author: string;
  password: string;
  message: string;
}

class PostForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      author: "",
      password: "",
      message: ""
    };
  }

  handleForm() {
    const d = new Date();
    const datestr: string =
      d.getFullYear() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      ("0" + d.getDate()).slice(-2) +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();

    const payload: PostComment = {
      thread_id: this.props.thread_id,
      author: this.state.author,
      password: this.state.password,
      message: this.state.message,
      datetime: datestr
    };

    this.props.postComment(payload);

    this.setState({
      author: "",
      password: "",
      message: ""
    });
  }

  updateAuthor(v: string) {
    this.setState({
      author: v
    });
  }

  updatePassword(v: string) {
    this.setState({
      password: v
    });
  }

  updateMessage(v: string) {
    this.setState({
      message: v
    });
  }

  render() {
    return (
      <Box>
        <SubTitle title="投稿フォーム" />
        <Box>
          <TextField
            required
            label="名前"
            fullWidth
            margin="normal"
            value={this.state.author}
            onChange={e => this.updateAuthor(e.target.value)}
          />
        </Box>
        <div>
          <TextField
            required
            label="パスワード"
            type="password"
            fullWidth
            margin="normal"
            value={this.state.password}
            onChange={e => this.updatePassword(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="本文"
            multiline
            rows="3"
            margin="normal"
            fullWidth
            value={this.state.message}
            onChange={e => this.updateMessage(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleForm()}
          >
            投稿する
          </Button>
        </div>
      </Box>
    );
  }
}

export default PostForm;
