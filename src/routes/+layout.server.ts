import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  const key = cookies.get('api-key')

  if (!key && url.pathname != "/login") {
    throw redirect(303, "/login")
  }
};
