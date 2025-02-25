<script lang="ts">
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/headscale3-dots.svg';
	import Link from '$lib/components/Link.svelte';
	let { children } = $props();

	const links: { to: string; icon: string; label: string }[] = [
		{
			to: '/nodes',
			icon: 'heroicons:computer-desktop-solid',
			label: 'Nodes'
		},
		{
			to: '/users',
			icon: 'heroicons:user-group',
			label: 'Users'
		}
	];
</script>

<div class="navbar bg-base-300 justify-center">
	<a class="text-xl" href="/">
		<img alt="Headscale Logo" src={logo} class="w-[7em]" />
	</a>
</div>

<nav class="bg-base-200 flex justify-center">
	<ul class="menu menu-horizontal justify-center">
		{#each links as link}
			<li>
				<Link href={link.to}>
					<Icon icon={link.icon} class="size-7"></Icon>
					{link.label}
				</Link>
			</li>
		{/each}
	</ul>
</nav>

<div class="mx-auto max-w-[65rem] px-1 py-2">
	{@render children()}
</div>
