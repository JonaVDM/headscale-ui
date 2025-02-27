<script lang="ts">
	import { enhance } from '$app/forms';
	import BackLink from '$lib/components/BackLink.svelte';
	import JsWarning from '$lib/components/JSWarning.svelte';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import TagForm from '$lib/forms/TagForm.svelte';
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
			<BackLink href="/nodes" class="link link-primary" />
		</div>
		<div>
			<div class="flex items-center gap-2 text-3xl">
				<span class="h-4 w-4 rounded-full bg-gray-500" class:bg-green-600={node.online}></span>
				<h1>{name}</h1>
			</div>
			<TagList forced={node.forcedTags} valid={node.validTags} invalid={node.invalidTags} />
		</div>

		<Link href="/users/{node.user?.id}">
			<UserCard user={node!.user!}></UserCard>
		</Link>

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

		<div class="card bg-base-200">
			<div class="card-body">
				<h2 class="card-title">Housekeeping</h2>
				<JsWarning></JsWarning>

				<div>
					<TagForm data={data.form} />

					<!-- Rename -->
					<!-- Delete -->

					<!--
            The api also has a option to change the user, but that has been
            nothing but a buggy expirence for me. I'm not even gonna put in
            any effort into making that feature availible in this dashboard.
          -->
				</div>

				<form action="?/expire" method="POST" use:enhance>
					<p class="mt-10 font-bold">Expire session</p>
					<button class="btn btn-warning">Expire</button>
				</form>

				<form action="?/delete" method="POST">
					<p class="mt-10 font-bold">Delete node</p>
					<p>
						You might be shocked to learn that this action is not easily reverable. Please type
						"delete" to confirm.
					</p>
					<div class="pb-2">
						<input type="text" name="confirm" class="input" />
					</div>

					<button class="btn btn-error">Delete</button>
				</form>
			</div>
		</div>
	</div>
{/if}
