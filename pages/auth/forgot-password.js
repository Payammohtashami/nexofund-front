import Login from "containers/Auth/Login";

const ForgotPasswordPage = () => {
    return (
        <Login />
    );
};
ForgotPasswordPage.headerHide = true;
ForgotPasswordPage.footerHide = true;


export const getServerSideProps = async () => {

    return {
        props: {
            initialStore: {},
        },
    };
};

export default ForgotPasswordPage;
