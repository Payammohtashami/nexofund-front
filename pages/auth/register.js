import dynamic from "next/dynamic";
import DynamicLoader from 'components/DynamicLoader';

const Register = dynamic(() => import('containers/Auth/Register'), {
    loading: DynamicLoader,
});

const RegisterPage = () => {
    return (
        <Register />
    );
};

export const getStaticProps = async (ctx) => {
    return {
        props: {},
    }
};

export default RegisterPage;
