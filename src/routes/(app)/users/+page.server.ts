import { newClient } from "$lib/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  try {
    const key = cookies.get('api-key');
    const client = newClient(fetch, key ?? '');

    return {
      users: await client.headscaleServiceListUsers()
    }
  } catch (e) {
    return error(400, "something went wrong")
  }
}
