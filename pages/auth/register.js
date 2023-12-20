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

RegisterPage.headerHide = true;
RegisterPage.footerHide = true;

export const getServerSideProps = async () => {
    return {
        props: {
            initialStore: {},
        },
    };
};


export default RegisterPage;
