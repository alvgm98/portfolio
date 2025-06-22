/**
 * If the condition is true, the css property will be applied with the given value.
 * @param name css property name
 * @param value value of the css property
 * @param condition condition to apply the css property
 * @returns string representing the css property
 */
export const cssPropByCondition = (name: string, value?: string, condition = true): string =>
  value && condition ? `${name}: ${value};` : "";