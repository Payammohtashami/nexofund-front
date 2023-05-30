export let requestErrors = {
    server: { message: "Error. Try again", type: 'warning' },
};
export const changeError = (props) => {
    if (props?.message === "Network Error") {
        return {
            server: { message: "network Error. Try again", type: 'warning' },
        }
    }
    let data = props?.response?.data;
    let convertFormat = {}
    if (!data) return requestErrors;
    let errors = data?.errors;
    let message = data?.message;
    if (errors) data?.errors?.map((error) => {
        let key = Object.keys(error)[0];
        let value = Object.values(error)[0];
        convertFormat = { ...convertFormat, [key]: { message: key + ' ' + value, type: 'danger' } }
    })
    else if (message) convertFormat = { ...convertFormat, server: { message: message, type: 'danger' } };
    if (Object.keys(convertFormat).length) return convertFormat;
    else return requestErrors;
}