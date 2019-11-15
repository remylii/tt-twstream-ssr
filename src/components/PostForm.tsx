import React from "react";
import { PostComment } from "../reducers/Comment";
import { PostFormActions } from "../containers/BbsContainer";

type ownProps = {
  thread_id: number;
};

type Props = ownProps & PostFormActions;

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
      <div>
        <input
          type="text"
          name="comment-author"
          value={this.state.author}
          onChange={e => this.updateAuthor(e.target.value)}
        />
        <input
          type="password"
          name="comment-password"
          value={this.state.password}
          onChange={e => this.updatePassword(e.target.value)}
        />
        <textarea
          name="comment-message"
          rows={5}
          value={this.state.message}
          onChange={e => this.updateMessage(e.target.value)}
        />
        <button
          onClick={() => {
            this.handleForm();
          }}
        >
          Btn
        </button>
      </div>
    );
  }
}

export default PostForm;
