import Login from "containers/Auth/Login";

const LoginPage = () => {
    return (
        <Login />
    );
};
LoginPage.headerHide = true;
LoginPage.footerHide = true;
export const getServerSideProps = async () => {
    return {
        props: {
            initialStore: {},
        },
    };
};

export default LoginPage;
