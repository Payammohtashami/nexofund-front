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

export const getServerSideProps = async () => {
    return {
        props: {
            initialStore: {},
        },
    };
};

export default ForgotPasswordPage;
