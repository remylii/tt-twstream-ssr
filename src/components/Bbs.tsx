import React from "react";
import { Comment } from "../reducers/Comment";
import { BbsProps, PostFormActions } from "../containers/BbsContainer";
import PostForm from "../components/PostForm";

type OwnProps = {};
type Props = OwnProps & BbsProps & PostFormActions;

export class Bbs extends React.Component<Props> {
  componentDidMount() {
    // console.log(`component did moutn thread_id string: ${this.props.id}`);
  }

  render() {
    if (!this.props.thread) {
      return <div>No thread.</div>;
    }

    return (
      <div>
        <p>Bbs components</p>
        {this.props.comments.length > 0 ? (
          this.props.comments.map((comment: Comment) => (
            <div key={`thread-comment-${comment.id}`}>
              <p>CommentID: {comment.id}</p>
              <p>{comment.author}</p>
            </div>
          ))
        ) : (
          <div>no comments</div>
        )}
        <PostForm
          thread_id={this.props.thread.id}
          postComment={this.props.postComment}
        />
      </div>
    );
  }
}
