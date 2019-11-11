import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  thread_id: number;
  children: string[];
};

const ThreadLink: React.FC<Props> = (props: Props) => {
  console.log(props);
  return (
    <NavLink
      exact
      to={`/thread/${props.thread_id}`}
    >
        {props.children}
    </NavLink>
  );
}

export default ThreadLink;
