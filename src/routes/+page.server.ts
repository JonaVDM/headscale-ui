import { Configuration, HeadscaleServiceApi } from '$lib/client';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const key = data.get('key');

    const client = new HeadscaleServiceApi(new Configuration({
      basePath: 'https://headscale.jonavdm.nl',
      fetchApi: fetch,
      headers: {
        Authorization: `Bearer ${key?.toString() || 'aabbcc'}`
      }
    }));

    return client.headscaleServiceListNodes()
  }
};
