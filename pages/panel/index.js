import Layout from 'components/Layout';
import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Panel = dynamic(() => import('containers/Panel'), {
    loading: DynamicLoader,
});
const Panelpage = () => {
    return (
        <Layout>
            <Panel />
        </Layout>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    }
}
export default Panelpage;