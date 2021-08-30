/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    CONFIG: any
  }
}

const CONFIG = window?.CONFIG ? window.CONFIG : process.env;

const getConfig = (k: string): string => CONFIG[k] ?? ""

export default getConfig;
