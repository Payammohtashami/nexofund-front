import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';


const ForgotPassword = dynamic(() => import('containers/Auth/ForgotPassword'), {
    loading: DynamicLoader,
});

const ForgotPasswordPage = () => {
    return (
        <ForgotPassword />
    );
};

export const getStaticProps = async (ctx) => {
    return {
        props: {},
    }
};

export default ForgotPasswordPage;
