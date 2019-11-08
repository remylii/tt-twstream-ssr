import React from 'react';
import { BbsState } from '../reducers/Bbs';
import { HomeActions } from '../containers/HomeContainer';

interface OwnProps {};
type HomeProps = OwnProps & BbsState & HomeActions;

export const Home: React.FC<HomeProps> = (props: HomeProps) => {

  return (
    <div>
      <p>Home</p>
      { props.threads && props.threads.length > 0 ?
      props.threads.map(thread => {
        return (
          <ul key={`thread-${thread.id}`}>
            <li>
              <a href={`/thread/${thread.id}`} onClick={ (e) => {
                props.pushById(thread.id);
              } }>- {thread.title}</a>
            </li>
          </ul>
        );
      })
      : <div>まだスレッドはない</div> }
    </div>
  );
}
