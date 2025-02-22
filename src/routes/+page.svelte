<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="container mx-auto">
	<h1 class="text-2xl font-thin">Hello World</h1>

	<form class="flex flex-col gap-2" method="POST" use:enhance>
		<label>
			API Key
			<input type="password" class="block w-full border" name="key" />
		</label>

		<div>
			<button class="rounded-lg bg-green-600 px-4 py-2 text-gray-100">Get things</button>
		</div>
		{#if form?.nodes}
			<div class="flex flex-col gap-4">
				{#each form.nodes as node}
					<div>
						<h2 class="text-lg font-bold">{node.name} (#{node.id})</h2>
						{#if node.online}
							<p>Currently online</p>
						{:else}
							<p>Last seen: {node.lastSeen}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</form>
</div>
