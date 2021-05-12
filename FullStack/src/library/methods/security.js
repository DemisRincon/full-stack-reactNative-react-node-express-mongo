import Base64 from "crypto-js/enc-base64";
import { SHA1 } from "crypto-js";

export const setBase64 = (string) => Base64.stringify(string);

export const getBase64 = (string) => Base64.parse(string);

export const setSHA1 = (string) => SHA1(string);
