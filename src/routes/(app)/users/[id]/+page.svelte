<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import NodeTable from '$lib/components/tables/NodeTable.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import Icon from '@iconify/svelte';

	const { data } = $props();
</script>

{#if data.user}
	<div class="flex flex-col gap-5">
		<BackLink href="/users" class="link" />
		<UserCard user={data.user}></UserCard>

		<NodeTable showUser={false} nodes={data.devices ?? []}></NodeTable>

		<div class="card bg-base-200">
			<div class="card-body">
				<h2 class="card-title">Pre-Auth keys</h2>

				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each data.keys.preAuthKeys ?? [] as key}
						<div class="overflow-x-scroll">
							<table class="table-sm table">
								<tbody>
									<tr>
										<th class="min-w-2/12 font-normal">Key</th>
										<td class="flex items-center gap-2 font-bold">
											<div>****</div>
											<Icon icon="lucide:clipboard-copy" class="cursor-pointer text-lg" />
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
