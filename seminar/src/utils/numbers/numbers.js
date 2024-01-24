export function isNumber(value) {
    if (typeof value === "number") return true;
    else if (typeof value === "string")
      if (isNaN(Number(value))) return false;
      else return true;
    else return false;
  }
  
  export function isArray(value) {
    return Array.isArray(value);
  }
  
  export function isString(value) {
    if (typeof value === "undefined") return;
    return typeof value === "string";
  }
  

export function toFa(input) {
    if (!(isNumber(input) || isString(input))) return;
    return (input + "")
      .replace(/0/g, "۰")
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹");
  }
  export function toEn(input) {
    if (!(isNumber(input) || isString(input))) return;
    return (input + "")
      .replace(/,/g, "")
      .replace(/۰/g, "0")
      .replace(/۱/g, "1")
      .replace(/۲/g, "2")
      .replace(/۳/g, "3")
      .replace(/۴/g, "4")
      .replace(/۵/g, "5")
      .replace(/۶/g, "6")
      .replace(/۷/g, "7")
      .replace(/۸/g, "8")
      .replace(/۹/g, "9");
  }