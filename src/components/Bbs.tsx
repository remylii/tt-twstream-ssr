import React from "react";
import { Comment } from "../reducers/Comment";
import { BbsProps, DispatchProps } from "../containers/BbsContainer";
import PostForm from "../components/PostForm";
import SubTitle from "./titles/SubTitle";
import styled from "styled-components";
import { spacing, SpacingProps } from "@material-ui/system";
import CommentBox from "./CommentBox";

type OwnProps = {};
type Props = OwnProps & BbsProps & DispatchProps;

const Box = styled.div<SpacingProps>`
  ${spacing}
`;

const Section = styled.section<SpacingProps>`
  ${spacing}
`;

export class Bbs extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchComment();
    // fetch(`http://localhost:10080/thread`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     console.log(json);
    //   });
    // console.log(`component did moutn thread_id string: ${this.props.id}`);
  }

  render() {
    if (!this.props.thread) {
      return <div>No thread.</div>;
    }

    return (
      <Box mb={2}>
        <Section mb={5}>
          <SubTitle title="投稿一覧" />
          {this.props.comments.length > 0 ? (
            this.props.comments.map((comment: Comment) => (
              <CommentBox
                key={`thread-comment-${comment.id}`}
                author={comment.author}
                datetime={comment.datetime}
                message={comment.message}
              />
            ))
          ) : (
            <div>no comments</div>
          )}
        </Section>
        <PostForm
          thread_id={this.props.thread.id}
          postComment={this.props.postComment}
          fetchComment={this.props.fetchComment}
        />
      </Box>
    );
  }
}
