import React, { Fragment } from 'react';
import dynamic from "next/dynamic";

const Home = dynamic(() => import('containers/Home'));
const Homepage = () => {

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};


export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Homepage;