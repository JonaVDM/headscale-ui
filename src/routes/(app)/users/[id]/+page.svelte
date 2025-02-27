<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import NodeTable from '$lib/components/tables/NodeTable.svelte';
	import UserCard from '$lib/components/UserCard.svelte';

	const { data } = $props();
</script>

{#if data.user}
	<div class="flex flex-col gap-5">
		<BackLink href="/users" class="link" />
		<UserCard user={data.user}></UserCard>

		<NodeTable showUser={false} nodes={data.devices ?? []}></NodeTable>
	</div>
{/if}
