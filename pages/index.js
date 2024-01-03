import Layout from 'components/Layout';
import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Home = dynamic(() => import('containers/Home'), {
    loading: DynamicLoader,
});

const Homepage = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};


export const getStaticProps = async (ctx) => {
    return {
        props: {},
    }
};
export default Homepage;