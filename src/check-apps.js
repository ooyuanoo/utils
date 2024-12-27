import {useUAtoCheckApp} from './common';

export function isWechat() {
    return useUAtoCheckApp('MicroMessenger');
}

export function isQQ() {
    return useUAtoCheckApp('QQ');
}

export function isWeibo() {
    return useUAtoCheckApp('WeiBo');
}