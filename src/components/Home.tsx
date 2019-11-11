import React from 'react';
import { BbsState } from '../reducers/Bbs';
import ThreadLink from './links/ThreadLink';

interface OwnProps {};
type HomeProps = OwnProps & BbsState;

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <p>Home</p>
      { props.threads && props.threads.length > 0 ?
      props.threads.map(thread => {
        return (
          <ul key={`thread-${thread.id}`}>
            <li>
              <ThreadLink thread_id={thread.id}>- {thread.title}</ThreadLink>
            </li>
          </ul>
        );
      })
      : <div>まだスレッドはない</div> }
    </div>
  );
}
