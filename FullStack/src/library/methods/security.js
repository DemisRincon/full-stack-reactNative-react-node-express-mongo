import { isJson, isObject, isString } from "./is";

import { SHA1 } from "crypto-js";
import jwt from "jsonwebtoken";

export const getBase64 = (value) => {
  let buffer = false;

  if (isString(value)) {
    buffer = Buffer.from(value, "base64").toString("ascii");
  }

  if (isJson(buffer)) {
    buffer = JSON.parse(Buffer.from(value, "base64").toString("ascii"));
  }

  return buffer;
};

export const setBase64 = (value) => {
  if (isObject(value)) {
    return Buffer.from(JSON.stringify(value)).toString("base64");
  } else if (isString(value)) {
    return Buffer.from(value).toString("base64");
  }

  return false;
};

export const setSHA1 = (string) => SHA1(string);

export const verifySeverCookie = (ck = "at", req) => {
  const accessToken = req.cookies[ck];

 return jwt.verify(
    accessToken,
    process.env.SECRET_KEY,
    (error, accessTokenData = {}) => {

      
      const { data: user } = accessTokenData;
  
      if (error) {
        return false;
      }

      return user ? getBase64(user) : false;
    }
  );
};
