<script lang="ts">
	import { base } from '$app/paths';

	const { children, href = '/', class: classlist = '' } = $props();
</script>

<a href="{base}{href}" class={classlist}>
	{@render children()}
</a>
