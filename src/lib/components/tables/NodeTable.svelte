<script lang="ts">
	import type { V1Node } from '$lib/client';
	import Link from '../Link.svelte';
	import TagList from '../TagList.svelte';

	const {
		showUser = true,
		nodes
	}: {
		showUser?: boolean;
		nodes: V1Node[];
	} = $props();

	const countTags = (node: V1Node) => {
		return (
			(node.invalidTags?.length ?? 0) +
			(node.validTags?.length ?? 0) +
			(node.forcedTags?.length ?? 0)
		);
	};
</script>

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
					<Link href="/nodes/{node.id}" class="block h-full w-full cursor-pointer">
						<div class="flex items-center gap-2">
							<span class="h-2 w-2 rounded-full bg-gray-500" class:bg-green-600={node.online}>
							</span>
							<p>{node.name}</p>
						</div>
						<div class="flex items-center gap-2">
							{#if countTags(node) > 0}
								<TagList valid={node.validTags} invalid={node.invalidTags} />
							{:else if showUser}
								<p class="text-xs font-thin">
									{node.user?.email || node.user?.name || node.user?.displayName || 'who?'}
								</p>
							{/if}
						</div>
					</Link>
				</td>
				<td>{node.ipAddresses?.join(', ')}</td>
				<td class="max-sm:hidden">{node.online ? '' : node.lastSeen?.toLocaleString()}</td>
			</tr>
		{/each}
	</tbody>
</table>
