import React, { Fragment } from 'react';
import Wallet from 'containers/Wallet/Main';

const Walletpage = () => {

  return (
    <Fragment>
      <Wallet />
    </Fragment>
  );
};


export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Walletpage;