import React, { Fragment } from 'react';
import Deposit from 'containers/Wallet/Deposit';

const Depositpage = () => {

  return (
    <Fragment>
      <Deposit />
    </Fragment>
  );
};


export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Depositpage;