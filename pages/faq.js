import dynamic from "next/dynamic";

const FAQ = dynamic(() => import('containers/FAQ'));
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