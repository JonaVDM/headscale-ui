import { newClient, type HeadscaleServiceSetTagsBody, type HeadscaleServiceSetTagsRequest } from "$lib/client";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from './$types';
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { tagSchema } from "$lib/forms/tagform-schema";
import { base } from '$app/paths';

export const load: PageServerLoad = async ({ fetch, cookies, params }) => {
  try {
    const key = cookies.get('api-key');
    const client = newClient(fetch, key ?? '');

    const node = await client.headscaleServiceGetNode({ nodeId: params.id });

    const tags = ([] as string[]).concat(
      node.node?.forcedTags ?? [],
      node.node?.validTags ?? [],
      node.node?.invalidTags ?? [],
    );

    const form = await superValidate({ tags }, zod(tagSchema));

    return {
      node,
      form,
      routes: await client.headscaleServiceGetNodeRoutes({ nodeId: params.id })
    }
  } catch (e) {
    console.log(e)
    return error(400, "something went wrong")
  }
}

export const actions: Actions = {
  tags: async ({ request, cookies, params }) => {
    const form = await superValidate(request, zod(tagSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const key = cookies.get('api-key');
      const client = newClient(fetch, key ?? '');

      const body: HeadscaleServiceSetTagsRequest = { body: { tags: form.data.tags }, nodeId: params.id };

      await client.headscaleServiceSetTags(body);
    } catch (e) {
      console.log(e)
    }
  },

  expire: async ({ cookies, params }) => {
    try {
      const key = cookies.get('api-key');
      const client = newClient(fetch, key ?? '');

      await client.headscaleServiceExpireNode({ nodeId: params.id });
    } catch (e) {
      console.log(e)
    }
  },

  delete: async ({ request, cookies, params }) => {
    try {
      if ((await request.formData()).get('confirm') != 'delete') {
        return '';
      }

      const key = cookies.get('api-key');
      const client = newClient(fetch, key ?? '');

      await client.headscaleServiceDeleteNode({ nodeId: params.id });
    } catch (e) {
      console.log(e)
      return
    }

    throw redirect(303, `${base}/nodes`)
  },
};
