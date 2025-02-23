import { newClient } from "$lib/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies, params }) => {
  try {
    const key = cookies.get('api-key');
    const client = newClient(fetch, key ?? '');

    return {
      node: await client.headscaleServiceGetNode({ nodeId: params.id }),
      routes: await client.headscaleServiceGetNodeRoutes({ nodeId: params.id })
    }
  } catch (e) {
    console.log(e)
    return error(400, "something went wrong")
  }
}
