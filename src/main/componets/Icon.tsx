import React from 'react';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: React.FC<IconPropsType> = ({
  iconId,
  width = '50',
  height = '50',
  viewBox = '0 0 50 50',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );
};
