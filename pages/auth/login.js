import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Login = dynamic(() => import('containers/Auth/Login'), {
    loading: DynamicLoader,
});

const LoginPage = () => {
    return (
        <Login />
    );
};

export const getServerSideProps = async () => {
    return {
        props: {
            initialStore: {},
        },
    };
};

export default LoginPage;
