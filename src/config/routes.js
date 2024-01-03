const routes = {
    base: '/',
    auth: {
        register: '/auth/register',
        login: '/auth/login',
        forgetPassword: '/auth/forget-password',
    },
    faq: '/faq',
    panel: {
        base: '/panel',
    },
    wallet: {
        base: '/wallet',
        deposit: '/wallet/deposit',
        withdraw: '/wallet/withdraw',
    }
};

export default routes;