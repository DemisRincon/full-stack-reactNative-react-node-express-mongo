import { general, local } from "./config.json";

let env = "local";
let config;
const configurations = {
  local: {
    baseUrl: local.baseUrl,
    api: local.api,
    cache: local.cache,
    debug: local.debug,
    security: general.security,
    serverPort: general.serverPort,
    session: local.session,
  },
};

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  env = process.env.NODE_ENV;
}
export const $config = () => (!config ? configurations[env] : config);
export const $isLocal = () => env === "local";
export const $serverPort = () => $config().serverPort;
