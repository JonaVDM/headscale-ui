<script lang="ts">
	import type { Infer, SuperValidated } from 'sveltekit-superforms';
	import { superForm, arrayProxy } from 'sveltekit-superforms';
	import type { TagSchema } from './tagform-schema';
	import Icon from '@iconify/svelte';

	let { data }: { data: SuperValidated<Infer<TagSchema>> } = $props();
	const superform = superForm(data);
	const { form, enhance, submitting } = superform;

	const { values, valueErrors } = arrayProxy(superform, 'tags');

	const addTag = (ev: Event) => {
		ev.preventDefault();

		console.log(values);
		values.update((val) => [...val, '']);
	};

	const removeTag = (ev: Event, index: number) => {
		ev.preventDefault();

		values.update((val) => val.filter((_, i) => i != index));
	};
</script>

<form method="POST" action="?/tags" use:enhance>
	<p class="font-bold">Edit tags</p>
	<p class="pb-2">Make sure that all tags start with "tag:"</p>

	<div class="flex flex-wrap gap-2">
		{#each $values as _, i}
			<div class="badge" class:badge-primary={!$valueErrors[i]} class:badge-error={$valueErrors[i]}>
				<input
					class="input input-ghost input-sm"
					placeholder="tag:"
					bind:value={$form.tags[i]}
					name="tags"
				/>

				<button onclick={(ev) => removeTag(ev, i)} class="cursor-pointer">
					<Icon icon="heroicons:trash"></Icon>
				</button>
			</div>
		{/each}

		<button class="btn btn-xs btn-secondary" onclick={addTag}>Add tag</button>
	</div>

	<button class="btn btn-primary mt-5" disabled={$submitting}>
		{#if $submitting}<span class="loading loading-spinner loading-md"></span>
		{/if}Save
	</button>
</form>
