import {useUAtoCheckApp} from './common';

export function isIOS() {
    return useUAtoCheckApp('\\(i[^;]+;( U;)? CPU.+Mac OS X');
}

export function isAndroid() {
    return useUAtoCheckApp('Android') || useUAtoCheckApp('Adr');
}

export function isPC() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileDevices = ['android', 'iphone', 'ipad', 'ipod', 'windows phone', 'mobile', 'tablet'];

    for (let device of mobileDevices) {
        if (userAgent.includes(device)) {
            return false;
        }
    }

    // check screen size and touch function
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const screenSize = window.innerWidth * window.innerHeight;

    // Suppose the screen size is larger than 768 * 1024 is pc side
    const isLargeScreen = screenSize > 768 * 1024;

    return !isTouchDevice && isLargeScreen;
}