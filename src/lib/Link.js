import React from "react";
import BeforeLink from "next/link";
import { withRouter } from "next/router";

const Link = ({ children, className, router, href, scroll, ...props }) => {
  return (
    <BeforeLink href={href} {...{ scroll }}>
      <a className={className} {...props}>
        {children}
      </a>
    </BeforeLink>
  );
};

export default withRouter(Link);