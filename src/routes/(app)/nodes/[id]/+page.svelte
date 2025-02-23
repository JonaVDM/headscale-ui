<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const node = $derived(data.node.node);
	const name = $derived(
		!node ? ':eyes:' : node.name == node.givenName ? node.name : `${node.givenName} (${node.name})`
	);

	const items = $derived([
		{ label: 'ID', value: node?.id?.toString() },
		{ label: 'Hostname', value: node?.name },
		{ label: 'Given name', value: node?.givenName },
		{ label: 'Last seen', value: node?.online ? 'Online' : node?.lastSeen?.toLocaleString() },
		{ label: 'Created at', value: node?.createdAt?.toLocaleString() },
		{ label: 'Expire', value: node?.expiry?.toLocaleString() },
		{ label: 'Register method', value: node?.registerMethod },
		{ label: 'IPv4', value: node?.ipAddresses![0] },
		{ label: 'IPv6', value: node?.ipAddresses![1] }
	]);
</script>

{#if !node}
	<p>Well this is akward</p>
{:else}
	<div class="flex flex-col gap-3">
		<div>
			<Link href="/nodes" class="link link-primary">Back</Link>
		</div>
		<div>
			<div class="flex items-center gap-2 text-3xl">
				<span class="h-4 w-4 rounded-full bg-gray-500" class:bg-green-600={node.online}></span>
				<h1>{name}</h1>
			</div>
			<div>
				<p class="link"><span class="text-xs font-thin">@</span>{node.user?.name}</p>
			</div>
			<TagList forced={node.forcedTags} valid={node.validTags} invalid={node.invalidTags} />
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<table class="table-sm table">
					<tbody>
						{#each items as item}
							<tr>
								<th class="min-w-2/12 font-normal">{item.label}</th>
								<td class="font-bold">{item.value}</td>
							</tr>
						{/each}

						<tr>
							<th class="min-w-2/12 font-normal">Forced tags</th>
							<td class="flex gap-2">
								<TagList forced={node.forcedTags} />
							</td>
						</tr>

						<tr>
							<th class="min-w-2/12 font-normal">Valid tags</th>
							<td class="flex gap-2">
								<TagList valid={node.validTags} />
							</td>
						</tr>

						<tr>
							<th class="min-w-2/12 font-normal">Invalid tags</th>
							<td class="flex gap-2">
								<TagList invalid={node.invalidTags} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		{#if data.routes.routes?.length ?? 0 > 0}
			<div class="card bg-base-200">
				<div class="card-body">
					<h2 class="card-title">Routes</h2>

					<div class="grid grid-cols-2 gap-10">
						{#each data.routes.routes! as route}
							<div>
								{#if route.enabled}
									<div class="badge badge-success">Enabled</div>
								{:else}
									<div class="badge badge-error">Disabled</div>
								{/if}

								<table class="table-sm table">
									<tbody>
										<tr>
											<th class="min-w-2/12 font-normal">ID</th>
											<td class="font-bold">{route.id}</td>
										</tr>

										<tr>
											<th class="min-w-2/12 font-normal">Prefix</th>
											<td class="font-bold">{route.prefix}</td>
										</tr>

										<tr>
											<th class="min-w-2/12 font-normal">Advertised</th>
											<td class="font-bold">{route.advertised ? 'Yes' : 'No'}</td>
										</tr>

										<tr>
											<th class="min-w-2/12 font-normal">Primary</th>
											<td class="font-bold">{route.isPrimary ? 'Yes' : 'No'}</td>
										</tr>

										<tr>
											<th class="min-w-2/12 font-normal">Created</th>
											<td class="font-bold">{route.createdAt?.toLocaleString()}</td>
										</tr>

										<tr>
											<th class="min-w-2/12 font-normal">Updated</th>
											<td class="font-bold">{route.updatedAt?.toLocaleString()}</td>
										</tr>
									</tbody>
								</table>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
{/if}
