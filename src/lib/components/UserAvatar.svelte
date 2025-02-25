<script lang="ts">
	const {
		avatar,
		name
	}: {
		avatar?: string;
		name?: string;
	} = $props();

	const initials = $derived.by(() => {
		if (name == '') {
			return '';
		}

		const spl = name?.split(' ') ?? [];

		if (spl.length == 1) {
			return spl[0][0].toUpperCase();
		}

		return [spl[0], spl[spl.length - 1]]
			.map((e) => e[0])
			.join('')
			.toUpperCase();
	});
</script>

{#if avatar && avatar != ''}
	<img src={avatar} alt={name} class="w-10 rounded-lg" />
{:else}
	<div class="bg-secondary flex h-10 w-10 items-center justify-center rounded-lg text-lg font-thin">
		{initials}
	</div>
{/if}
