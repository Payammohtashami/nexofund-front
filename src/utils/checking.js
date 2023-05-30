export const isBrowser = typeof window !== "undefined";
export function isNumeric(str) {
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}