import { HeadscaleServiceApi } from "./client/apis";
import { Configuration, type FetchAPI } from "./client/runtime";
import { env } from '$env/dynamic/public'
import type { ServerLoadEvent } from "@sveltejs/kit";

export * from './client/index';

export const newClient = (fetch: FetchAPI, key: string) => {
  const base = env.PUBLIC_BASE_URL || "https://headscale.jonavdm.nl";
  const client = new HeadscaleServiceApi(new Configuration({
    basePath: base,
    fetchApi: fetch,
    headers: {
      Authorization: `Bearer ${key}`
    },
  }));

  return client
}

export const newClientEvent = (event: ServerLoadEvent) => {
  const { fetch, cookies } = event;
  const key = cookies.get('api-key');

  const base = env.PUBLIC_BASE_URL || "https://headscale.jonavdm.nl";
  const client = new HeadscaleServiceApi(new Configuration({
    basePath: base,
    fetchApi: fetch,
    headers: {
      Authorization: `Bearer ${key}`
    },
  }));

  return client
}

