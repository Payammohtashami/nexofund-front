import React, { Fragment } from "react";
import Login from "containers/Login";

const LoginPage = () => {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};
LoginPage.headerHide = true;
LoginPage.footerHide = true;
export const getServerSideProps = async () => {

  return {
    props: {
      initialStore: {
      },
    },
  };
};

export default LoginPage;
