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

export const getStaticProps = async (ctx) => {
    return {
        props: {},
    }
};

export default LoginPage;
