import React, { Fragment } from 'react';
import Home from 'containers/Home';

const Homepage = () => {

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

Homepage.footerHide = true;

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Homepage;