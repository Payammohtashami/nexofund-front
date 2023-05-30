import nookies from 'nookies';

export const decodedToken = (token) => {
    const tokenDecoded = decode(token);
    return tokenDecoded;
}
export function getCookie(ctx) {
    return nookies.get(ctx, { path: '/' })
}
export function tokenMsAge(token) {
    const dateNow = Date.now() / 1000;
    let second = 0;
    let expTime = decodedToken(token)?.payload?.exp;
    if (expTime) second = Math.floor(expTime - dateNow);
    return {
        s: second,
        ms: second * 1000
    }

}