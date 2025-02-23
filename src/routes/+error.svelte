<script lang="ts">
	import { page } from '$app/state';
</script>

<p>Panic!</p>

<pre>{JSON.stringify(page.error, null, 2)}</pre>
