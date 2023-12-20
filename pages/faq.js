import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const FAQ = dynamic(() => import('containers/FAQ'), {
    loading: DynamicLoader,
});
const FAQpage = () => {
    return (
        <FAQ />
    );
};


export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    }
}
export default FAQpage;