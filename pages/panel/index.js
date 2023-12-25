import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Panel = dynamic(() => import('containers/Panel'), {
    loading: DynamicLoader,
});
const Panelpage = () => {
    return (
        <>
            <Panel />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    }
}
export default Panelpage;