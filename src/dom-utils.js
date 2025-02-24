/**
 * @description change document title
 * @param title
 */
export function changeDomTitle(title) {
  document.title = title;

  const iframe = document.createElement('iframe');
  iframe.style.visibility = 'hidden';
  iframe.style.width = '1px';
  iframe.style.height = '1px';

  iframe.onload = () => {
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 0);
  };

  document.body.appendChild(iframe);
}

/**
 * @description scroll document to some position
 * @param {number} position
 */
export function changeDomScrollTop(position) {
  document.documentElement.scrollTop = position;
  document.body.scrollTop = position;
}

/**
 * @param prop
 * @return {number}
 */
export function getScrollProp(prop) {
  let bodyScrollProp = 0;
  let documentScrollProp = 0;

  if (document.body) {
    bodyScrollProp = document.body[prop];
  }

  if (document.documentElement) {
    documentScrollProp = document.documentElement[prop];
  }

  return bodyScrollProp > documentScrollProp ? bodyScrollProp : documentScrollProp;
}

/**
 * @description get window height
 * @return {number}
 */
export function getWindowHeight() {
  if (document.compatMode === 'CSS1Compat') {
    return document.documentElement.clientHeight;
  }

  return document.body.clientHeight;
}

/**
 * @description check is in page bottom
 * @param gap
 * @return {boolean}
 */
export function isInBottom(gap) {
  return getScrollProp('scrollTop') + getWindowHeight() + (gap || 0) >= getScrollProp('scrollHeight');
}

/**
 * @description page visibility listener
 */
export function visibilitychangeListener(hiddenCallback, visibleCallback) {
  let event;

  if (document.visibilityState) {
    event = 'visibilitychange';
  } else if (document.webkitVisibilityState) {
    event = 'webkitVisibilitychange';
  } else if (document.mozVisibilityState) {
    event = 'mozVisibilitychange';
  } else {
    event = document.oVisibilityState ? 'oVisibilitychange' : 'msVisibilitychange';
  }

  document.addEventListener(event, () => {
    if (document.visibilityState === 'hidden') {
      if (hiddenCallback) {
        hiddenCallback();
      }
    } else if (visibleCallback) {
      visibleCallback();
    }
  });
}

/**
 * load script
 */
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';

    if (script.readyState) {
      const readyState = script.readyState.toLocaleLowerCase();
      script.onreadystatechange = () => {
        if (/loaded|complete/.test(readyState)) {
          resolve(script.readyState);
        } else {
          reject();
        }
      }
    } else {
      script.onload = () => {
        resolve('loaded');
      };

      script.onerror = () => {
        reject();
      };
    }

    script.src = url;
    document.body.appendChild(script);
  })
}