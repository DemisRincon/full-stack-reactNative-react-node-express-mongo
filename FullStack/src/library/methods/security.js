import { isJson, isObject, isString } from './is'

import { SHA1 } from "crypto-js";

export function getBase64(value) {
    let buffer = false
  
    if (isString(value)) {
      buffer = Buffer.from(value, 'base64').toString('ascii')
    }
  
    if (isJson(buffer)) {
      buffer = JSON.parse(Buffer.from(value, 'base64').toString('ascii'))
    }
  
    return buffer
  }
  
  export function setBase64(value) {
    if (isObject(value)) {
      return Buffer.from(JSON.stringify(value)).toString('base64')
    } else if (isString(value)) {
      return Buffer.from(value).toString('base64')
    }
  
    return false
  }

export const setSHA1 = (string) => SHA1(string);
