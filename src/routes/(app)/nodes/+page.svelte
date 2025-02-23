<script lang="ts">
	import TagList from '$lib/components/TagList.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const nodes = $derived(
		(data.nodes.nodes || []).map((value) => ({
			name: value.name == value.givenName ? value.name : `${value.givenName} (${value.name})`,
			address: value.ipAddresses?.join(', '),
			last: value.online ? 'Currently online' : (value.lastSeen?.toLocaleString() ?? '-'),
			raw: value
		}))
	);
</script>

<div class="overflow-x-scroll">
	<table class="table">
		<thead>
			<tr>
				<th class="bg-base-300 rounded-l-box">Machine</th>
				<th class="bg-base-300 max-sm:rounded-e-box">Address</th>
				<th class="bg-base-300 rounded-e-box max-sm:hidden">Last seen</th>
			</tr>
		</thead>
		<tbody>
			{#each nodes as node}
				<tr class="hover:bg-base-200">
					<td>
						<a href="/nodes/{node.raw.id}" class="block h-full w-full cursor-pointer">
							<div class="flex items-center gap-2">
								<span class="h-2 w-2 rounded-full bg-gray-500" class:bg-green-600={node.raw.online}>
								</span>
								<p>{node.name}</p>
							</div>
							<div class="flex items-center gap-2">
								<p class="font-thin">{node.raw.user?.name ?? '-'}</p>
								<TagList valid={node.raw.validTags} invalid={node.raw.invalidTags} />
							</div>
						</a>
					</td>
					<td>{node.address}</td>
					<td class="max-sm:hidden">{node.last}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
