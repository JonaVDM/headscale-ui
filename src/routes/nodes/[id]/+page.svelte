<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const node = $derived(data.node.node);
	const name = $derived(
		!node ? ':eyes:' : node.name == node.givenName ? node.name : `${node.givenName} (${node.name})`
	);
</script>

{#if !node}
	<p>Well this is akward</p>
{:else}
	<div class="flex flex-col gap-3 py-2">
		<h1 class="text-3xl">{name}</h1>

		<table class="table-xs table">
			<tbody>
				<tr>
					<th>ID</th>
					<td>{node.id}</td>
				</tr>

				<tr>
					<th>Machine Key</th>
					<td>{node.machineKey}</td>
				</tr>

				<tr>
					<th>Node Key</th>
					<td>{node.nodeKey}</td>
				</tr>

				<tr>
					<th>Disco Key</th>
					<td>{node.discoKey}</td>
				</tr>

				<tr>
					<th>Name</th>
					<td>{node.name}</td>
				</tr>

				<tr>
					<th>Given name</th>
					<td>{node.givenName}</td>
				</tr>

				<tr>
					<th>Last seen</th>
					<td>{node.lastSeen?.toLocaleString()}</td>
				</tr>

				<tr>
					<th>Created at</th>
					<td>{node.createdAt?.toLocaleString()}</td>
				</tr>

				<tr>
					<th>Expire</th>
					<td>{node.expiry?.toLocaleString()}</td>
				</tr>

				<tr>
					<th>Online</th>
					<td>{node.online ? 'Yes' : 'No'}</td>
				</tr>

				<tr>
					<th>Register method</th>
					<td>{node.registerMethod}</td>
				</tr>

				<tr>
					<th>User</th>
					<td>{node.user?.name} (id: {node.user?.id})</td>
				</tr>

				<tr>
					<th>Forced tags</th>
					<td class="flex gap-2">
						{#each node.forcedTags ?? [] as tag}
							<div class="badge badge-outline badge-warning text-xs">{tag}</div>
						{/each}
					</td>
				</tr>

				<tr>
					<th>Valid tags</th>
					<td class="flex gap-2">
						{#each node.validTags ?? [] as tag}
							<div class="badge badge-outline badge-success text-xs">{tag}</div>
						{/each}
					</td>
				</tr>

				<tr>
					<th>Invalid tags</th>
					<td class="flex gap-2">
						{#each node.invalidTags ?? [] as tag}
							<div class="badge badge-outline badge-success text-xs">{tag}</div>
						{/each}
					</td>
				</tr>

				<tr>
					<th>IPs</th>
					<td class="flex gap-2">
						{#each node.ipAddresses ?? [] as ip}
							<p>{ip}</p>
						{/each}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
{/if}
