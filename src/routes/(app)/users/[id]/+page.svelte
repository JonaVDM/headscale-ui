<script lang="ts">
	import { enhance } from '$app/forms';
	import BackLink from '$lib/components/BackLink.svelte';
	import JsWarning from '$lib/components/JSWarning.svelte';
	import NodeTable from '$lib/components/tables/NodeTable.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import Icon from '@iconify/svelte';

	const { data } = $props();

	let showExpired = $state(true);
	let filter = $state('');

	const filteredKeys = $derived(
		data.keys.preAuthKeys?.filter(
			(e) =>
				(showExpired || e.expiration! > new Date()) && (filter == '' || e.key?.includes(filter))
		) ?? []
	);

	const copyKey = (key: string) => navigator.clipboard.writeText(key);
</script>

{#if data.user}
	<div class="flex flex-col gap-5">
		<BackLink href="/users" class="link" />
		<UserCard user={data.user}></UserCard>

		<NodeTable showUser={false} nodes={data.devices ?? []}></NodeTable>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex justify-between">
					<h2 class="card-title">Pre-Auth keys</h2>
					<label class="label cursor-pointer">
						<span class="label-text">Show expired</span>
						<input type="checkbox" class="toggle" bind:checked={showExpired} />
					</label>
				</div>

				<JsWarning />

				<div class="flex flex-row-reverse">
					<input type="text" placeholder="Filter keys" class="input" bind:value={filter} />
				</div>

				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each filteredKeys as key}
						<div class="overflow-x-scroll">
							<table class="table-sm table">
								<tbody>
									<tr>
										<th class="min-w-2/12 font-normal">Key</th>
										<td class="flex items-center gap-2 font-bold">
											<div>****</div>

											<!-- TODO: Tooltip, for some odd reason the example on the daisyui website is not working here -->
											<Icon
												icon="lucide:clipboard-copy"
												class="cursor-pointer text-lg"
												onclick={() => copyKey(key.key ?? '')}
											/>
										</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Expired</th>
										<td class="flex items-center gap-4 font-bold">
											{#if key.expiration! < new Date()}
												<span class="text-success">Yes</span>
											{:else}
												<span class="text-error">No</span>
												<form action="?/expire" method="POST" use:enhance>
													<input type="hidden" name="key" value={key.key} />
													<input type="hidden" name="user" value={key.user} />
													<button class="btn btn-link btn-xs">Expire now</button>
												</form>
											{/if}
										</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Reusable</th>
										<td class="font-bold">
											{#if key.reusable}
												<span class="text-success">Yes</span>
											{:else}
												<span class="text-error">No</span>
											{/if}
										</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Ephemeral</th>
										<td class="font-bold">
											{#if key.ephemeral}
												<span class="text-success">Yes</span>
											{:else}
												<span class="text-error">No</span>
											{/if}
										</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Used</th>
										<td class="font-bold">
											{#if key.used}
												<span class="text-success">Yes</span>
											{:else}
												<span class="text-error">No</span>
											{/if}
										</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Created</th>
										<td class="font-bold">{key.createdAt?.toLocaleString()}</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Expires</th>
										<td class="font-bold">{key.expiration?.toLocaleString()}</td>
									</tr>
									<tr>
										<th class="min-w-2/12 font-normal">Tags</th>
										<td class="flex gap-1 font-bold"><TagList valid={key.aclTags}></TagList></td>
									</tr>
								</tbody>
							</table>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
