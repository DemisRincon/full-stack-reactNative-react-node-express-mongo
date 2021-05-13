import { isBrowser } from "./is";

export function redirectTo(url = "/") {
  if (isBrowser()) {
    window.location.href = url;
  }

  return false;
}
