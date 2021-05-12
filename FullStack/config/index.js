import { general, local, production } from "./config.json";

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
  production: {
    baseUrl: production.baseUrl,
    api: production.api,
    cache: production.cache,
    debug: production.debug,
    security: general.security,
    serverPort: general.serverPort,
    session: production.session,
  },
};

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  env = process.env.NODE_ENV;
}
export const $api = () => $config().api;
export const $baseUrl = () => $config().baseUrl;
export const $cache = () => $config().cache;
export const $config = () => (!config ? configurations[env] : config);
export const $debug = () => $config().debug;
export const $isLocal = () => env === "local";
export const $isProduction = () => env === "production";
export const $security = () => $config().security;
export const $serverPort = () => $config().serverPort;
export const $session = () => $config().session;
