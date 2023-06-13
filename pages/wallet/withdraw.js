import React, { Fragment } from 'react';
import Withdraw from 'containers/Wallet/Withdraw';

const Withdrawpage = () => {

  return (
    <Fragment>
      <Withdraw />
    </Fragment>
  );
};


export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Withdrawpage;