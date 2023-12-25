import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Home = dynamic(() => import('containers/Home'), {
    loading: DynamicLoader,
  });
const Homepage = () => {
    return (
        <Home />
    );
};


export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    }
};
export default Homepage;