export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export function limitStringLength(str, start, end) {
  if (str === undefined || str === null || typeof str !== 'string') return null;
  if (str.length < end) {
    return str;
  } else {
    let modifiedStr = str.substring(start, end) + ' ...';
    return modifiedStr;
  }
}
