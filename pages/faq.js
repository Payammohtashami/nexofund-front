import React, { Fragment } from 'react';
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import('containers/FAQ'));
const FAQpage = () => {

  return (
    <Fragment>
      <FAQ />
    </Fragment>
  );
};


export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default FAQpage;