
export const flattenObject = (obj, prefix = '') => {
  const flattenObj = {};
  for (let key in obj) {
    const propName = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(obj[key])) flattenObj[propName] = obj[key];
    else if(obj[key] && (typeof obj[key] === "object")) flattenObject(obj[key], propName);
    else flattenObj[propName] = obj[key]; 
  }
  return flattenObj;
};