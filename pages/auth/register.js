import React, { Fragment } from "react";
import Register from "containers/Auth/Register";
import { wrapper } from '../../src/redux/store';

const RegisterPage = () => {
  return (
    <Fragment>
      <Register />
    </Fragment>
  );
};

RegisterPage.headerHide = true;
RegisterPage.footerHide = true;

export const getServerSideProps = wrapper.getServerSideProps((store) => async()=> {
  return {
    props: {
      initialStore: {},
    }
  }
});


export default RegisterPage;
