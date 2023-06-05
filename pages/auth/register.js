import React, { Fragment } from "react";
import Login from "containers/Login";

const RegisterPage = () => {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

RegisterPage.headerHide = true;
RegisterPage.footerHide = true;

export const getServerSideProps = async () => {

  return {
    props: {
      initialStore: {
      },
    },
  };
};

export default RegisterPage;
