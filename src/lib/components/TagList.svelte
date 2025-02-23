<script lang="ts">
	let {
		forced = [],
		valid = [],
		invalid = []
	}: {
		forced?: string[];
		valid?: string[];
		invalid?: string[];
	} = $props();
</script>

{#each forced as tag}
	<div class="badge badge-outline badge-warning text-xs">{tag}</div>
{/each}

{#each valid as tag}
	<div class="badge badge-outline badge-success text-xs">{tag}</div>
{/each}

{#each invalid as tag}
	<div class="badge badge-outline badge-error text-xs">{tag}</div>
{/each}
