import dynamic from 'next/dynamic';
import DynamicLoader from 'components/DynamicLoader';

const Wallet = dynamic(() => import('containers/Wallet'), {
  loading: DynamicLoader,
});
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