import nookies from "nookies";

export function getCookie(ctx) {
    return nookies.get(ctx, { path: "/" });
}

export function getAccessToken(ctx) {
    let getCookies = getCookie(ctx);
    return getCookies['access-token'];
}