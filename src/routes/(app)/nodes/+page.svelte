<script lang="ts">
	import NodeTable from '$lib/components/tables/NodeTable.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div class="overflow-x-scroll">
	<NodeTable nodes={data.nodes.nodes ?? []}></NodeTable>
</div>
