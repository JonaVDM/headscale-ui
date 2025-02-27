<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import UserAvatar from '$lib/components/UserAvatar.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const users = $derived(
		data.users.users?.map((user) => ({
			name: user.displayName == '' ? user.name : `${user.displayName}`,
			email: user.email == '' ? '-' : user.email,
			raw: user
		})) ?? []
	);
</script>

<div class="overflow-x-scroll">
	<table class="table">
		<thead>
			<tr>
				<th class="bg-base-300 rounded-l-box">User</th>
				<th class="bg-base-300">Email</th>
				<th class="bg-base-300">ID</th>
				<th class="bg-base-300 rounded-e-box">Joined on</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr class="hover:bg-base-200">
					<td>
						<Link href="/users/{user.raw.id}" class="flex items-center gap-2">
							<UserAvatar name={user.name} avatar={user.raw.profilePicUrl} />
							{user.name}
						</Link>
					</td>
					<td>
						<Link href="/users/{user.raw.id}">
							{user.email}
						</Link>
					</td>
					<td>
						<Link href="/users/{user.raw.id}">
							{user.raw.id}
						</Link>
					</td>
					<td>
						<Link href="/users/{user.raw.id}">
							{user.raw.createdAt?.toLocaleDateString()}
						</Link>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
