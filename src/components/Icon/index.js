import React from "react";
import cn from "classnames";

const icons = {
  
};

const Icon = (props) => {
  const size = props.size ? props.size : 16;
  let name = props.name;
  let viewBox = "0 0 16 16";
  const withSvg = { face: true};
  if (props.viewBox) viewBox = props.viewBox;
  return withSvg[name] ? (
    icons[name]
  ) : (
    <svg className={cn(props.className)} width={size} height={size} viewBox={viewBox}>
      {icons[name]}
    </svg>
  );
};

export default Icon;