// use userAgent to check app
export function useUAtoCheckApp(uaStr) {
    const ua = new RegExp(uaStr, 'i');
    return navigator.userAgent.match(ua);
}
