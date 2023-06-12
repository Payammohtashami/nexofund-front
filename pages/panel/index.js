import React, { Fragment } from 'react';
import Panel from 'containers/Panel';

const Panelpage = () => {

  return (
    <Fragment>
      <Panel />
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}
export default Panelpage;