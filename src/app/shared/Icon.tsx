import React from "react";

import Icons from "../../styles/icons/icons.svg";

export const Icon = ({ name, size }: iconProps) => {
  return (
    <svg className={`icon icon-${name}`} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

type iconProps = {
  name?: string;
  size: number;
};
