import type { Actions } from './$types';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters';
import { newClient } from '$lib/client';
import { redirect, type ServerLoad } from '@sveltejs/kit';
import { dev } from '$app/environment';

const schema = z.object({
  key: z.string().nonempty('Key cannot be empty'),
});

export const load: ServerLoad = async ({ cookies }) => {
  if (!!cookies.get('api-key')) {
    throw redirect(303, "/")
  }

  const form = await superValidate(zod(schema));

  return { form };
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const client = newClient(fetch, form.data.key);
      await client.headscaleServiceListApiKeys();

      cookies.set('api-key', form.data.key, { path: '/', secure: !dev, maxAge: 60 * 60 * 24 * 365, })
    } catch (e) {
      return message(form, "Login failed", {
        status: 401,
      });
    }
    throw redirect(303, '/');
  }
};
