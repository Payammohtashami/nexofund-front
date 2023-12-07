export const BASE_URL = "https://dev-api.nexofund.com/api";

export default {
    auth: {
        registerEmail: `v1/auth/register`,
        verifyEmail: `v1/auth/verify-email`,
        resendVerifyCode: `v1/auth/resend-email-verify-code`,
        setPassword: `v1/auth/set-password`,
        login: `v1/auth/login`,
        logout: `v1/auth/logout`,
        forgotPassword: `v1/auth/forgot-password`,
    },
}