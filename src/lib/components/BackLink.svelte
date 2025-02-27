<script lang="ts">
	import { base } from '$app/paths';

	const { href = '/', class: classlist = '' } = $props();

	const onclick = (ev: Event) => {
		ev.preventDefault();
		history.back();
	};
</script>

<a href="{base}{href}" {onclick} class={classlist}>Back</a>
