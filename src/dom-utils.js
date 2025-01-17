/**
 * change document title
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
