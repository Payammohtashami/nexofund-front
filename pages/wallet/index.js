import dynamic from 'next/dynamic';

const Wallet = dynamic(() => import('containers/Wallet'));
const Walletpage = () => {
    return (
        <Wallet />
    );
};


export const getServerSideProps = async () => {
  return {
    props: {},
  }
}
export default Walletpage;