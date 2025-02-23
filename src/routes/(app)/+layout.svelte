<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';
	import logo from '$lib/assets/headscale3-dots.svg';
	let { children } = $props();

	const links: { to: string; icon: string; label: string }[] = [
		{
			to: '/nodes',
			icon: 'heroicons:computer-desktop-solid',
			label: 'Nodes'
		}
	];
</script>

<div class="navbar bg-base-300 justify-center">
	<a class="text-xl" href="/">
		<img alt="Headscale Logo" src={logo} class="w-[7em]" />
	</a>
</div>

<nav class="bg-base-200 flex justify-center max-sm:hidden">
	<ul class="menu menu-horizontal justify-center">
		{#each links as link}
			<li>
				<a href={link.to} class:menu-active={page.route.id?.startsWith(link.to)}>
					<Icon icon={link.icon} class="size-7"></Icon>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<div class="mx-auto max-w-[65rem] px-1 py-2">
	{@render children()}
</div>

<div class="dock bg-base-300 sm:hidden">
	{#each links as link}
		<a href={link.to} class:dock-active={page.route.id?.startsWith(link.to)}>
			<Icon icon={link.icon} class="size-[1.2em]"></Icon>
			<span class="dock-label">{link.label}</span>
		</a>
	{/each}
</div>
