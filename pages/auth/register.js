import React, { Fragment } from "react";
import Register from "containers/Auth/Register";

const RegisterPage = () => {
  return (
    <Fragment>
      <Register />
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
