const BASE_URL = "https://dev-api.nexofund.com/api";

export default {
    auth: {
        registerEmail: `${BASE_URL}/v1/auth/register`,
        verifyEmail: `${BASE_URL}/v1/auth/verify-email`,
        resendVerifyCode: `${BASE_URL}/v1/auth/resend-email-verify-code`,
        setPassword: `${BASE_URL}/v1/auth/set-password`,
        login: `${BASE_URL}/v1/auth/login`,
        logout: `${BASE_URL}/v1/auth/logout`,
    },
}