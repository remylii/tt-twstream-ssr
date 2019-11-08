import React from 'react';
import { BbsActions } from '../containers/BbsContainer';

interface OwnProps {};

type BbsProps = OwnProps & BbsActions;

export const Bbs: React.FC<BbsProps> = (props: BbsProps) => {
  console.log(props);
  return (
    <div>
      <p>Bbs components</p>
    </div>
  );
};
