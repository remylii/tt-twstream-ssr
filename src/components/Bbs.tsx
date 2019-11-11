import React from 'react';
import { BbsActions } from '../containers/BbsContainer';
import { BbsState } from '../reducers/Bbs';

interface OwnProps {
  id: string;
};

type BbsProps = OwnProps & BbsState & BbsActions;

export class Bbs extends React.Component<BbsProps> {
  constructor(props: BbsProps) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    console.log(`component did moutn thread_id string: ${this.props.id}`);
  }

  render() {
    const thread_id = parseInt(this.props.id, 10);
    const thread = this.props.threads.find(thread => thread.id === thread_id);
    if (!thread) {
      return <div>No Thread</div>
    }

    return (
      <div>
        <p>Bbs components</p>
        <p>title: {thread.title}</p>
        { thread.comments.map(comment => {
          return (
            <div key={`thread-comment-${comment.id}`}>
              <p>ID: {comment.id}</p>
              <p>author: {comment.author}</p>
              <p>datetime: {comment.datetime}</p>
              <p>{comment.message}</p>
            </div>
          );
        }) }
      </div>
    );
  }
}
