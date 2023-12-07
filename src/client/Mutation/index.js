import ApiCall from "client/apiCall";
import api from "config/api";
import { useMutation, useQueryClient } from "react-query";

export const useRegisterEmail = () => {
    const queryClient = useQueryClient();
    return useMutation((data) => ApiCall("post", api.auth.registerEmail, data), {
      onSuccess: () => {
        queryClient.invalidateQueries("register-email");
      },
    });
};

export const useConfirmRegisteredCode = () => {
    const queryClient = useQueryClient();
    return useMutation((data) => ApiCall("post", api.auth.verifyEmail, data), {
      onSuccess: () => {
        queryClient.invalidateQueries("confirm-register-code");
      },
    });
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation((data) => ApiCall("post", api.auth.login, data), {
      onSuccess: () => {
        queryClient.invalidateQueries("login-with-email-code");
      },
    });
};

export const useForgotPassword = () => {
    const queryClient = useQueryClient();
    return useMutation((data) => ApiCall("post", api.auth.forgotPassword, data), {
      onSuccess: () => {
        queryClient.invalidateQueries("forgot-password-code");
      },
    });
};