import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { base } from '$app/paths';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  const key = cookies.get('api-key')

  if (!key && url.pathname != `${base}/login`) {
    throw redirect(303, `${base}/login`)
  }
};
