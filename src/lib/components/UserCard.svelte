<script lang="ts">
	import type { V1User } from '$lib/client';
	import UserAvatar from './UserAvatar.svelte';

	const { user }: { user: V1User } = $props();
</script>

<div class="card bg-base-200">
	<div class="card-body flex-row items-center">
		<UserAvatar
			name={user.displayName || user.name || user.email || '?'}
			avatar={user.profilePicUrl}
		></UserAvatar>
		<div>
			{#if user.name != ''}
				<p>{user.name}</p>
			{/if}

			{#if user.displayName != ''}
				<p>{user.displayName}</p>
			{/if}

			{#if user.email != ''}
				<p>{user.email}</p>
			{/if}
		</div>
	</div>
</div>
