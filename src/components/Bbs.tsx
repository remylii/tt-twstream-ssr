import React from "react";
import { Thread } from "../reducers/Bbs";
import { Comment } from "../reducers/Comment";
import { BbsProps } from "../containers/BbsContainer";
import PostFormContainer from "../containers/PostFormContainer";

type OwnProps = {};
type Props = OwnProps & BbsProps;

type ownState = {
  byId: Thread | undefined;
};

export class Bbs extends React.Component<Props, ownState> {
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
              <p>comment</p>
              <p>{comment.author}</p>
            </div>
          ))
        ) : (
          <div>no comments</div>
        )}
        <PostFormContainer thread_id={this.props.thread.id} />
      </div>
    );
  }
}
