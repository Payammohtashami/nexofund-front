import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import DynamicLoader from 'components/DynamicLoader';

const Wallet = dynamic(() => import('containers/Wallet'), {
    loading: DynamicLoader,
});
const Walletpage = () => {
    return (
        <Layout>
            <Wallet />
        </Layout>
    );
};


export const getServerSideProps = async () => {
    return {
        props: {},
    }
}
export default Walletpage;