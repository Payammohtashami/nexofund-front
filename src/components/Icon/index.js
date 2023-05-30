import React from "react";
import cn from "classnames";

const icons = {
  Logo: (
    <svg viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M33.8347 5.36477V30.2983L24.4565 34.0359V19.2903H28.0443L24.4565 13.3299V8.96655L33.8347 5.36477ZM25.2068 9.48209V13.1215L29.3716 20.0405H25.2068V32.9293L33.0845 29.7896V6.4566L25.2068 9.48209Z" fill="#7B90FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7056 0.80072V13.075L18.1623 19.2903H21.7056V37.1756L12.3274 40.9133V28.4809H15.9755L12.3274 22.4586V4.4025L21.7056 0.80072ZM13.0776 4.91804V22.2491L17.3072 29.2312H13.0776V39.8066L20.9553 36.667V20.0405H16.871L20.9553 12.8762V1.89255L13.0776 4.91804Z" fill="#7B90FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63895 7.99573V22.2693L5.98431 28.4184H9.63895V32.9318L0.198219 36.3956V11.5275L9.63895 7.99573ZM0.948476 12.0479V35.3212L8.88869 32.4079V29.1686H4.66564L8.88869 22.0632V9.07744L0.948476 12.0479Z" fill="#7B90FF"/>
    </svg>
  ),
  ArrowBottom: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.98 4.47998V19.47" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.98798 13.483L12 19.52L18.012 13.483" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
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