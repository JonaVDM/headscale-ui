import { HeadscaleServiceApi } from "./client/apis";
import { Configuration } from "./client/runtime";

export const newClient = (fetch: any, key: string) => {
  const client = new HeadscaleServiceApi(new Configuration({
    basePath: 'https://headscale.jonavdm.nl',
    fetchApi: fetch,
    headers: {
      Authorization: `Bearer ${key}`
    }
  }));

  return client
}
