import dynamic from "next/dynamic";

const Home = dynamic(() => import('containers/Home'));
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