import { HeadscaleServiceApi, newClient, newClientEvent, type V1Node, type V1User } from '$lib/client';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	try {
		const client = newClientEvent(event);
		const userId = event.params.id;

		const user = await getUser(client, userId);

		return {
			user,
			devices: await getDevices(client, userId),
			keys: await client.headscaleServiceListPreAuthKeys({ user: user?.email || user?.name }),
		};

	} catch (e) {
		console.log(e);
		return error(400, 'something went wrong');
	}
};

export const actions: Actions = {
	expire: async ({ cookies, request }) => {
		try {
			const key = cookies.get('api-key');
			const client = newClient(fetch, key ?? '');

			const data = await request.formData();
			const authKey = data.get('key')?.toString() ?? '';
			const user = data.get('user')?.toString() ?? '';
			client.headscaleServiceExpirePreAuthKey({ body: { user, key: authKey } });
		} catch (e) {
			console.log(e);
			return error(400, "something went wrong");
		}
	}
};

async function getUser(client: HeadscaleServiceApi, id: string): Promise<V1User | undefined> {
	const users = await client.headscaleServiceListUsers();
	return users.users?.find((u) => u.id == id);
}


async function getDevices(client: HeadscaleServiceApi, id: string): Promise<V1Node[] | undefined> {
	const devices = await client.headscaleServiceListNodes();
	return devices.nodes?.filter((d) => d.user?.id == id);
}