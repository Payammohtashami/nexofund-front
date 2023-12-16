import Register from "containers/Auth/Register";

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
