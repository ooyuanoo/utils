/**
 * convert object data to query string
 * @param {object} data
 * @return {string}
 */
export function encodeFormDataToUrlSearch(data) {
  return Object.keys(data).reduce((all, key) => all.concat(`${key}=${encodeURIComponent(data[key])}`), []).join('&');
}

/**
 * get link params by key
 * @param url
 * @param key
 * @returns {string}
 */
export function getLinkParams(url, key) {
  const link = url || window.location.href;

  if (!link.split('?')[1]) {
    return '';
  }

  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const r = link.split('?')[1].match(reg);

  if (r != null) {
    return r[2];
  }

  return '';
}
