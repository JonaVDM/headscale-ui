import { newClient } from '$lib/client';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const key = data.get('key');

    try {
      const client = newClient(fetch, key?.toString() || '')
      return await client.headscaleServiceListNodes()
    } catch {
      return [];
    }
  }
};
