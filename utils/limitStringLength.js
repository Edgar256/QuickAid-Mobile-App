export default function limitStringLength(str, start, end) {
  if (str === undefined || str === null || typeof str !== 'string') return null;
  if (str.length < end) {
    return str;
  } else {
    let modifiedStr = str.substring(start, end) + ' ...';
    return modifiedStr;
  }
}
