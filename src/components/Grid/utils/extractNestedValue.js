export const extractNestedValue = (object, field) => {
  const levels = field.split('.');
  const nestedValue = levels.reduce((obj, key) => obj?.[key], object);
  return nestedValue;
}
