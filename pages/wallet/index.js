import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

const Wallet = dynamic(() => import('containers/Wallet'));
const Walletpage = () => {
  return (
    <Fragment>
      <Wallet />
    </Fragment>
  );
};


export const getServerSideProps = async () => {
  return {
    props: {},
  }
}
export default Walletpage;